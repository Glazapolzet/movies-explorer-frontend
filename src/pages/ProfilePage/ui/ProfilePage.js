import React, { useContext } from 'react';
import styles from './ProfilePage.module.css';
import { Profile } from 'components/Profile';
import { mainApi } from 'shared/api/main';
import { AuthorizedContext, CurrentUserContext } from 'shared/contexts';

const ProfilePage = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setAuthorized } = useContext(AuthorizedContext);

  function handleSubmit({ name, email }) {
    return mainApi.updateUser({ name, email })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
   }

   function handleLogout() {
    mainApi.logout()
      .then(() => {
        setAuthorized(false);
      })
      .catch((err) => console.log(err));
   }

  return (
    <main className={styles.main}>
      <Profile
        onSubmit={handleSubmit}
        onLogout={handleLogout}
      />
    </main>
  )
}

export default ProfilePage;
