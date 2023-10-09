import React, { useState } from 'react';
import { CurrentUserContext } from 'shared/contexts';

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </CurrentUserContext.Provider>
  )
}
