import React from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from 'shared/routes';

export const ProtectedRoute = ({ isAuthorized, element: Component }) => {
  return (
    isAuthorized ? Component : <Navigate to={paths.main} replace />
  )
}
