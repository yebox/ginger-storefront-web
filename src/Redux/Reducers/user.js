import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state = action.payload
            return state
        }
    }

})

const {
    actions,
    reducer: userReducer
} = userSlice

const { setUser } = actions

export {
    userReducer,
    setUser
}