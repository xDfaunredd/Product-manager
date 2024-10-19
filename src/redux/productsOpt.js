import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://67093697af1a3998baa0c453.mockapi.io/",
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await productsApi.get("/products");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const { data } = await productsApi.post("/products", product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const { data } = await productsApi.delete(`/products/${productId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product, thunkAPI) => {
    try {
      const { data } = await productsApi.put(
        `/products/${product.id}`,
        product
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
