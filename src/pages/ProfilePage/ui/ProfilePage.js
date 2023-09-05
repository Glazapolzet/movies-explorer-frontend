import React from 'react';
import styles from './ProfilePage.module.css';
import { Profile } from 'components/Profile';

const ProfilePage = () => {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  )
}

export default ProfilePage;
