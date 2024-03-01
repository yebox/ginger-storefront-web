import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;

const { setUser, logout } = actions;

export { userReducer, setUser, logout };
