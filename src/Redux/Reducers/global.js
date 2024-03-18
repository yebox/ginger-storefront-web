import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "global",
  initialState: {},
  reducers: {
    setSelectedProductName: (state, action) => {
      state.selectedProductName = action.payload;
      return state;
    },
    setSelectedOrderItem: (state, action) => {
      state.selectedOrderItem = action.payload;
      return state;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
      return state;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setInitialSubCateogry: (state, action) => {
      state.initialSubCategory = action.payload;
    },
  },
});

const { actions, reducer: GlobalReducer } = GlobalSlice;

const {
  setSelectedProductName,
  setSelectedOrderItem,
  setSelectedCategory,
  setCategories,
  setInitialSubCateogry,
} = actions;

export {
  GlobalReducer,
  setSelectedProductName,
  setSelectedOrderItem,
  setCategories,
  setSelectedCategory,
  setInitialSubCateogry,
};
