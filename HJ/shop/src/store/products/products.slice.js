import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products.fetchProducts",
  async (thunkAPI) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loaing products");
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
