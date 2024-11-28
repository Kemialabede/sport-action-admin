/* eslint-disable react/prop-types */
import React from 'react';
import { useUserContext } from '../../contexts/userContexts';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn } = useUserContext();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default PrivateRoute;
