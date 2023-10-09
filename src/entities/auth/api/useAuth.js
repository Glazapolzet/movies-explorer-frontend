import { useContext } from 'react';
import { mainApi } from 'shared/api/main';
import { AuthorizedContext, CurrentUserContext } from 'shared/contexts';
import { useLocalStorage } from 'shared/lib';
import { WAS_AUTHORIZED_LOCAL_STORAGE_KEY } from 'shared/config';
import { useClearUserData } from 'features/clear-user-data';

export const useAuth = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setAuthorized } = useContext(AuthorizedContext);

  const { clearUserData } = useClearUserData();

  const { setItemToLocalStorage, getItemFromLocalStorage } = useLocalStorage();

  const authUser = () => {
    return mainApi.getUser()
      .then((user) => {
        setCurrentUser(user);
        setAuthorized(true);
      })
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      });
  }

  const checkUserWasAuthorized = () => {
    return getItemFromLocalStorage(WAS_AUTHORIZED_LOCAL_STORAGE_KEY);
  }

  const login = ({ email, password }) => {
    return mainApi.login({ email, password })
      .then(() => {
        authUser();

        setItemToLocalStorage(WAS_AUTHORIZED_LOCAL_STORAGE_KEY, true);
      })
  }

  const register = ({ name, email, password }) => {
    return mainApi.register({ name, email, password })
      .then(() => login({ email, password }))
  }

  const updateUser = ({ name, email }) => {
    return mainApi.updateUser({ name, email })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);

        return updatedUser;
      })
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      })
  }

  const logout = () => {
    return mainApi.logout()
      .then(() => clearUserData())
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      });
  }

  return { login, register, logout, updateUser, authUser, checkUserWasAuthorized }
}
