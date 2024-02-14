import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import thunk from "redux-thunk";
import userReducer from './store/userSlice';
// combineReducers


const rootReducer=combineReducers({
user:userReducer
})


const Store = configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
  });
  
export default Store;