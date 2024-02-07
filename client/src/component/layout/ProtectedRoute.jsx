// import React from 'react'
import { useGetMeQuery } from "../../redux/apis/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { useOutlet, Navigate } from "react-router-dom";


const ProtectedRoute = () => {
    // const dispatch = useDispatch();
    const outlet = useOutlet();
    const { user } = useSelector((state) => state.user);
    const { isLoading, data } = useGetMeQuery();

console.log(user,isLoading)
  return (
    <>
{data ? outlet : <Navigate to="/login" replace />}
    </>
  )
}

export default ProtectedRoute