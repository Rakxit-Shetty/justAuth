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

      getUser(state, { payload }) {
        state.user = payload;
      },
      setTokens(state, { payload }) {
        state.accessToken = payload.accessToken;
       
      },
      resetUser() {
        return initialState;
      },
    }
});

export const {
    resetUser,
    setTokens,
    getUser,
  } = userSlice.actions;
  export const userReducer = userSlice.reducer;
  