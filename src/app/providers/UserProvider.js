import React, { useState } from 'react';
import { AuthorizedContext } from 'shared/contexts';
import { CurrentUserContext } from 'shared/contexts';

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthorized, setAuthorized] = useState(false);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <AuthorizedContext.Provider value={{isAuthorized, setAuthorized}}>
        {children}
      </AuthorizedContext.Provider>
    </CurrentUserContext.Provider>
  )
}