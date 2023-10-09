import React from 'react';
import { UserProvider } from './UserProvider';
import { AuthorizedProvider } from './AuthorizedProvider';

export const Provider = ({ children }) => {
  return (
    <UserProvider>
      <AuthorizedProvider>
        {children}
      </AuthorizedProvider>
    </UserProvider>
  )
}
