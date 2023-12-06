import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({  }) => {
  const status = useSelector((state) => state.status);
  return <div>{status.isLoggedIn ? <Outlet /> : <Navigate to='/' />}</div>;
};

export default ProtectedRoute;