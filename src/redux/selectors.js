import { createSelector } from "@reduxjs/toolkit";

export const selectIsOpen = (state) => state.modal.isOpen;
export const selectProducts = (state) => state.products.items;
export const selectEditIsOpen = (state) => state.modalEdit.isOpen;
export const selectCurrentProduct = (state) => state.modalEdit.currentProduct;
export const selectIsOpenSort = (state) => state.filter.isOpen;

export const selectFilter = (state) => state.filter.filter;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    switch (filter) {
      case "sortByName":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "sortByCount":
        return [...products].sort((a, b) => +a.count - +b.count);
      default:
        return products;
    }
  }
);
