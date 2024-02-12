/* eslint-disable no-unused-labels */
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUser,setTokens } from "../slices/userSlice";
// import { customFetchBase } from "../customFetchBase"
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2021/', 
    prepareHeaders:(headers) => {
      headers.set('x-auth-token',  localStorage.getItem("accessToken"))
      return headers
  } }),
   endpoints:(builder)=>({

    getMe: builder.query({
      providesTags: () => [{ type: "me" }],
      query: () => ({
        url: "/api/auth/me",
        method: "POST",
      }),

      async onQueryStarted(args, obj) {
        try {
         
          const { data } = await obj.queryFulfilled;
          console.log("data",data)
          obj.dispatch(getUser(data.data.user));
        } catch (error) {
          if (import.meta.env.DEV) console.error("Error:", error);
        }
      },
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
console.log("got",data)
       localStorage.setItem("accessToken", data.accessToken);
      // localStorage.setItem("refreshToken", data.refreshToken);
      obj.dispatch(
        setTokens({
          accessToken: data.accessToken,
          //refreshToken: data.refreshToken,
        })
      );
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