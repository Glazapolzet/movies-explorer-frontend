import React from 'react';
import { RouterProvider } from './RouterProvider';
import { CurrentUserContextProvider } from './CurrentUserContextProvider';
import { AuthorizedContextProvider } from './AuthorizedContextProvider';

export const Provider = ({ children }) => {
  return (
    <RouterProvider>
      <CurrentUserContextProvider>
        <AuthorizedContextProvider>
          {children}
        </AuthorizedContextProvider>
      </CurrentUserContextProvider>
    </RouterProvider>
  )
}
