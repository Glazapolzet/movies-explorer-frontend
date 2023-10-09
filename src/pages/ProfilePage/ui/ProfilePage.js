import React from 'react';
import styles from './ProfilePage.module.css';
import { Profile } from 'components/Profile';
import { useAuth } from 'entities/auth';

const ProfilePage = ({ onProfileUpdate }) => {
  const { updateUser, logout } = useAuth();

  function handleSubmit({ name, email }) {
    return updateUser({ name, email })
      .then((updatedUser) => {
        if (!updatedUser) {
          return;
        }

        onProfileUpdate();
      })
  }

  function handleLogout() {
    logout()
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
