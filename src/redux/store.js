import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import modalReducer from "./modalSlice";
import modalEditSlice from "./modalEditSlice";
import filerSlice from "./filerSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
    modalEdit: modalEditSlice,
    filter: filerSlice,
  },
});
