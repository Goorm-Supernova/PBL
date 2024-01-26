import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categories.slice";

export const store = configureStore({
  reducer: {
    categorySlice,
  },
});
