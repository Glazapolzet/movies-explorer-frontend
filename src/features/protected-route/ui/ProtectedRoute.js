import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthorized, element: Component }) => {
  return (
    isAuthorized ? Component : <Navigate to="/sign-in" replace />
  )
}
