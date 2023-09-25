import React, {useEffect, useState} from 'react';
import { AuthorizedContext } from 'shared/contexts';

export const AuthorizedContextProvider = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    setAuthorized(true);
  }, [])

  return (
    <AuthorizedContext.Provider value={isAuthorized}>
      {children}
    </AuthorizedContext.Provider>
  )
}
