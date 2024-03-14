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
  },
});

const { actions, reducer: GlobalReducer } = GlobalSlice;

const { setSelectedProductName, setSelectedOrderItem } = actions;

export { GlobalReducer, setSelectedProductName, setSelectedOrderItem };
