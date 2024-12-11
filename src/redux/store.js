import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, wishlistReducer } from "./cartSlice";

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utilities/localStorageUtils";
const preloadedState = {
  cart: loadFromLocalStorage("cart") || {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  wishlist: loadFromLocalStorage("wishlist") || {
    items: [],
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage("cart", store.getState().cart);
  saveToLocalStorage("wishlist", store.getState().wishlist);
});

export default store;
