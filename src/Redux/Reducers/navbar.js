import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
  name: "navbar",
  initialState: {},
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setInitialSubCateogry: (state, action) => {
      state.initialSubCategory = action.payload;
    },
    setActiveInitialSubCateogry: (state, action) => {
      state.activeIntialSubCategory = action.payload;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setActiveBrand: (state, action) => {
      state.activeBrand = action.payload;
    },
    setActivePrice: (state, action) => {
      state.activeBrand = action.payload;
    },
  },
});

const { actions, reducer: NavbarReducer } = NavSlice;

const {
  setSelectedCategory,
  setInitialSubCateogry,
  setActiveInitialSubCateogry,
  setActiveIndex,
  setActivePrice,
  setActiveBrand
} = actions;

export {
  NavbarReducer,
  setSelectedCategory,
  setInitialSubCateogry,
  setActiveInitialSubCateogry,
  setActiveIndex,
  setActivePrice,
  setActiveBrand
};
