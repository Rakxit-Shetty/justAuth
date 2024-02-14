// import React from 'react'
import { useGetMeQuery } from "../../redux/apis/UserApi";
import {  useSelector } from "react-redux";
import { useOutlet, Navigate } from "react-router-dom";


const ProtectedRoute = ({reverse}) => {
    // const dispatch = useDispatch();
    const outlet = useOutlet();
    const { user } = useSelector((state) => state.user);
    const { isLoading, data } = useGetMeQuery();


    

if (reverse) {
  return <Navigate to={"/"} replace />;
} else{
  // if (reverse) {
  //   return  outlet;
  // } else {
    return <Navigate to="/login" replace />;
  // }
}

  
}

export default ProtectedRoute