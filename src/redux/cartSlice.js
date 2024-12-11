import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const initialWishlistState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          size: newItem.size,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeFromCart(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        state.items = state.items.filter(
          (item) => !(item.id === id && item.size === size)
        );
      }
    },
    updateQuantity(state, action) {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (item && quantity > 0) {
        const quantityDifference = quantity - item.quantity;
        state.totalQuantity += quantityDifference;
        state.totalAmount += quantityDifference * item.price;

        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      }
    },
    removeFromWishlist(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const cartReducer = cartSlice.reducer;
export const wishlistReducer = wishlistSlice.reducer;
