import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthProvider';

type RequireUnAuthProps = {
  children: JSX.Element
}

const RequireUnAuth: React.FC<RequireUnAuthProps> = ({ children }) => {
  let { isAuthorized } = useAuth();
  let location = useLocation();

  if (isAuthorized) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireUnAuth;