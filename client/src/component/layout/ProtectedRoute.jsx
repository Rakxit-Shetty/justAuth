// import React from 'react'
import { useGetMeQuery } from "../../redux/apis/UserApi";
import {  useSelector } from "react-redux";
import { useOutlet, Navigate } from "react-router-dom";


const ProtectedRoute = () => {
    // const dispatch = useDispatch();
    const outlet = useOutlet();
    const { user } = useSelector((state) => state.user);
    const { isLoading, data } = useGetMeQuery();

console.log("P route",user,isLoading,data);

  return (
    <>
{data ? outlet : <Navigate to="/login" replace/>}
    </>
  )
}

export default ProtectedRoute