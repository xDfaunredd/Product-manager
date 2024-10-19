import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentProduct: null,
};

const modalEditSlice = createSlice({
  name: "modalEdit",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isOpen = true;
      state.currentProduct = action.payload;
    },
    closeEditModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openEditModal, closeEditModal } = modalEditSlice.actions;
export default modalEditSlice.reducer;
