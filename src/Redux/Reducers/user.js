import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
    setTokenOnRefresh: (state, action) => {
      state = {
        ...state,
        accessToken: action.payload,
      };
      return state;
    },
    logout: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;

const { setUser, setTokenOnRefresh, logout } = actions;

export { userReducer, setUser, setTokenOnRefresh, logout };
