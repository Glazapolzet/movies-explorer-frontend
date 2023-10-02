import React from 'react';
import { RouterProvider } from './RouterProvider';
import { UserProvider } from './UserProvider';
import { AuthorizedProvider } from './AuthorizedProvider';

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
