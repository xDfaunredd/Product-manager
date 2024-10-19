import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchProducts,
} from "./productsOpt";

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

export default productsSlice.reducer;
