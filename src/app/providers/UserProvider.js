import React, { useEffect, useState } from 'react';
import { AuthorizedContext } from 'shared/contexts';
import { CurrentUserContext } from 'shared/contexts';
import { mainApi } from 'shared/api/main';
import { useNavigate } from 'react-router-dom';
import { paths } from 'shared/routes';

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isAuthorized, setAuthorized] = useState(false);

  function getUserCredentials() {
    return mainApi.getUser()
      .then((user) => {
        if (!user) {
          return Promise.reject(new Error('Пройдите авторизацию'));
        }

        return user;
      })
  }

  function checkAuth() {
    getUserCredentials()
      .then((user) => {
        setCurrentUser(user);
        setAuthorized(true);

        navigate(paths.movies, {replace: true});
      })
      .catch((err) => {
        if (!isAuthorized) {
          console.log('logout!');
          localStorage.clear();

          setCurrentUser({});
          navigate(paths.main, {replace: true});
        }

        console.log(err)
      })
  }

  useEffect(() => {
    checkAuth();
  }, [isAuthorized]);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <AuthorizedContext.Provider value={{isAuthorized, setAuthorized}}>
        {children}
      </AuthorizedContext.Provider>
    </CurrentUserContext.Provider>
  )
}