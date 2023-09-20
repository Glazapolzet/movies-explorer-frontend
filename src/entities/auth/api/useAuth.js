import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mainApi } from 'shared/api/main';
import { paths } from 'shared/routes';
import { AuthorizedContext, CurrentUserContext } from 'shared/contexts';

export const useAuth = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setAuthorized } = useContext(AuthorizedContext);

  const navigate = useNavigate();

  function authUser() {
    return mainApi.getUser()
      .then((user) => setCurrentUser(user))
  }

  const login = ({ email, password }) => {
    return mainApi.login({ email, password })
      .then(() => {
        authUser()
          .then(() => {
            setAuthorized(true);

            navigate(paths.movies, {replace: true});
          })
          .catch((err) => console.log(err));
      })
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

        navigate(paths.main, {replace: true});
        localStorage.clear();
        setCurrentUser({});
      })
      .catch((err) => console.log(err));
  }

  const tryLoginOnEnter = () => {
    authUser()
      .then(() => {
        setAuthorized(true);

        navigate(paths.movies, {replace: true});
      })
      .catch((err) => {
        localStorage.clear();

        console.log(err);
      });
  }

  return { login, register, updateUser, logout, tryLoginOnEnter }
}
