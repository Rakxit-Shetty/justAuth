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

      resetUser() {
        return initialState;
      },
    }
});

export const {
    resetUser,
    getUser,
  } = userSlice.actions;
  export const userReducer = userSlice.reducer;
  