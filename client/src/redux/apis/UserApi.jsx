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
   })
})

export const {
    useGetMeQuery
  } = userApi;