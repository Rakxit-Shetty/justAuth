import {configureStore} from '@reduxjs/toolkit';

import { userReducer } from "./slices/userSlice";

import { userApi } from './apis/UserApi';
// import { setupListeners } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store=configureStore({

    reducer: {user: userReducer,
        [userApi.reducerPath]: userApi.reducer,},
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        userApi.middleware,]

})

setupListeners(store.dispatch);