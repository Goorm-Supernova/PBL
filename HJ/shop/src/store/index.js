import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/products.slice";
import categoriesSlice from "./categories/categories.slice";
import cartSlice from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    cartSlice,
    productsSlice,
    categoriesSlice,
  },
});
