import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthProvider';

type RequireAuthProps = {
  children: JSX.Element
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  let { isAuthorized } = useAuth();
  let location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;