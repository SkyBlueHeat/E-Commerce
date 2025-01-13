import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');


  return <Navigate to="/login" replace />;
};

export default Logout;
