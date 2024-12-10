import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
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
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage("cart", store.getState().cart);
});

export default store;
