import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  isOpen: false,
};

const filerSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByName: (state) => {
      state.filter = "sortByName";
    },
    sortByCount: (state) => {
      state.filter = "sortByCount";
    },
    setIsOpen: (state) => {
      state.isOpen = true;
    },
    closeIsOpen: (state) => {
      state.isOpen = false;
    },
  },
});

export const { sortByCount, sortByName, setIsOpen, closeIsOpen } =
  filerSlice.actions;
export default filerSlice.reducer;
