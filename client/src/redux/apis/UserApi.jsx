/* eslint-disable no-unused-labels */
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { customFetchBase } from "../customFetchBase"
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2021/' }),//"http://localhost:2021/",//customFetchBase,
   endpoints:(builder)=>({
    getMe: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
        
      }),
    }),
//* Login ******************************************************
login: builder.mutation({
  query: (formData) => ({
    url: "/api/auth/login",
    method: "POST",
    body: formData,
  }),

  async onQueryStarted(args, obj) {
    try {
      const { data } = await obj.queryFulfilled;
console.log(data)
      // localStorage.setItem("accessToken", data.accessToken);
      // localStorage.setItem("refreshToken", data.refreshToken);
      // obj.dispatch(
      //   setTokens({
      //     accessToken: data.accessToken,
      //     refreshToken: data.refreshToken,
      //   })
      // );
      // obj.dispatch(userApi.util.invalidateTags(["me"]));
    } catch (error) {
      if (import.meta.env.DEV) console.error("Error:", error);
    }
  },
}),

   })
})

export const {
  useLoginMutation,
    useGetMeQuery
  } = userApi;