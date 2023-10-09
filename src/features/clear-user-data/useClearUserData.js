import { useContext } from 'react';
import { AuthorizedContext, CurrentUserContext } from 'shared/contexts';

export const useClearUserData = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setAuthorized } = useContext(AuthorizedContext);

  const clearUserData = () => {
    setAuthorized(false);

    localStorage.clear();
    setCurrentUser({});
  }

  return {clearUserData}
}
