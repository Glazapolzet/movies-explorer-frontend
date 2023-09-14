import React from 'react';
import { RouterProvider } from './RouterProvider';
import { UserProvider } from './UserProvider';

export const Provider = ({ children }) => {
  return (
    <RouterProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </RouterProvider>
  )
}
