import { useContext } from 'react';
import { mainApi } from 'shared/api/main';
import { AuthorizedContext, CurrentUserContext } from 'shared/contexts';
import { useLocalStorage } from 'shared/lib';
import { WAS_AUTHORIZED_LOCAL_STORAGE_KEY } from 'shared/config';

export const useAuth = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setAuthorized } = useContext(AuthorizedContext);

  const { setItemToLocalStorage, getItemFromLocalStorage } = useLocalStorage();

  // const checkUser = () => {
  //   mainApi.getUser()
  //     .catch((err) => {
  //       if (err.status !== 401) {
  //         return;
  //       }
  //
  //       logout();
  //     })
  // }

  const authUser = () => {
    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user);
        setAuthorized(true);
      })
      .catch((err) => {
        localStorage.clear();

        console.log(err);
      });
  }

  const loginUser = () => {
    authUser();

    setItemToLocalStorage(WAS_AUTHORIZED_LOCAL_STORAGE_KEY, true);
  }

  const checkUserWasAuthorized = () => {
    return getItemFromLocalStorage(WAS_AUTHORIZED_LOCAL_STORAGE_KEY);
  }

  const login = ({ email, password }) => {
    return mainApi.login({ email, password })
      .then(() => loginUser())
  }

  const register = ({ name, email, password }) => {
    return mainApi.register({ name, email, password })
      .then(() => login({ email, password }))
  }

  const updateUser = ({ name, email }) => {
    return mainApi.updateUser({ name, email })
      .then((updatedUser) => setCurrentUser(updatedUser));
  }

  const logout = () => {
    mainApi.logout()
      .then(() => {
        setAuthorized(false);

        localStorage.clear();
        setCurrentUser({});
      })
      .catch((err) => console.log(err));
  }

  return { login, register, logout, updateUser, authUser, checkUserWasAuthorized }
}
