import React from 'react';
import styles from './ProfilePage.module.css';
import { Profile } from 'components/Profile';
import { useAuth } from 'entities/auth';

const ProfilePage = () => {
  const { updateUser, logout } = useAuth();

  function handleSubmit({ name, email }) {
    return updateUser({ name, email });
  }

   function handleLogout() {
    logout();
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
