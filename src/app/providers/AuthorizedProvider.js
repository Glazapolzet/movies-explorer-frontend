import React, { useState } from 'react';
import { AuthorizedContext } from 'shared/contexts';

export const AuthorizedProvider = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(false);

  return (
    <AuthorizedContext.Provider value={{isAuthorized, setAuthorized}}>
      {children}
    </AuthorizedContext.Provider>
  )
}
