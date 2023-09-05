import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from 'shared/contexts';
import { currentUser as currentUserMock } from 'shared/mocks';

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(currentUserMock);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  )
}
