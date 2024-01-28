import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    cartSlice,
    productsSlice,
    categorySlice,
  },
});
