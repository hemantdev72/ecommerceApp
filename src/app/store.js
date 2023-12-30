import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slice/sliderSlice";
import productsReducer from "../features/slice/productSlice";
import cartReducer from "../features/slice/cartSlice";
import authReducer from "../features/slice/authSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});