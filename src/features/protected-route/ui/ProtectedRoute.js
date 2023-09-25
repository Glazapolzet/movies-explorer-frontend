import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizedContext } from 'shared/contexts';

export const ProtectedRoute = ({element: Component}) => {
  const { isAuthorized } = useContext(AuthorizedContext);

  return (
    isAuthorized ? Component : <Navigate to="/sign-in" replace />
  )
}
