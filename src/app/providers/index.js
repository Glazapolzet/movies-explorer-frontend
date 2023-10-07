import React from 'react';
import { UserProvider } from './UserProvider';
import { AuthorizedProvider } from './AuthorizedProvider';
import { RouterProvider } from './RouterProvider';

export const Provider = ({ children }) => {
  return (
    <RouterProvider>
      <UserProvider>
        <AuthorizedProvider>
          {children}
        </AuthorizedProvider>
      </UserProvider>
    </RouterProvider>
  )
}
