/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const userSlice=createSlice({
    name: "user",
    initialState: {
      token: localStorage.getItem("token"),
      user: null,
      errorResponse: null,
    },
  
    reducers: {},
    extraReducers:(builder) => {
        builder
          .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            //state.deactiveUser = action.payload.userInActive;
          })}
});

export const addUser = createAsyncThunk("api/adduser", async (payload) => {
    try {
      await axios.post(`${linkPath}/api/user/add_user`, payload);
      getUser({
        userGroupName: payload.userGroupName,
        instId: payload.instId,
      });
    } catch (error) {
      console.log(error.message);
    }
  });

export const {  } = userSlice.actions;

export default userSlice.reducer;