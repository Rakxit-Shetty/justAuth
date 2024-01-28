import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  alertMsg: null,
  alertType: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUser() {
            return initialState;
          },
    }
});

export const {
   
    resetUser,
   
  } = userSlice.actions;
  export const userReducer = userSlice.reducer;
  