import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { Mutex } from "async-mutex";
// const mutex = new Mutex();

const baseQuery=fetchBaseQuery({
    baseUrl:import.meta.env.backendURI
});

export const customFetchBase=async(args, api, extraOptions)=>{
 // wait until the mutex is available without locking it
//  await mutex.waitForUnlock();
 let result = await baseQuery(args, api, extraOptions);

    // if (result?.error?.data?.message === "Please login to proceed!") {
    //     console.log("not hit");
    // }

 return result;
}