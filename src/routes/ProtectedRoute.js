import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let isAuthenticated;
  const jsonData = localStorage.getItem('TOKEN_NAME');
  if(jsonData){
    const data = JSON.parse(jsonData);
    console.log(data.user);
    const dataJson = [data]
    const filterData =dataJson.map((item)=> data.user === item.user);
    console.log(filterData);
    isAuthenticated = filterData;
  }
  
  
  if (isAuthenticated) {
    return children || <Outlet />;
  }
  return <Navigate replace to='/login' />;
};

export default ProtectedRoute;