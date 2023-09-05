import React, { useContext } from 'react';
import styles from './Profile.module.css';
import { ProfileForm } from './ProfileForm/ProfileForm';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { CurrentUserContext } from 'shared/contexts';
import { greeting, logoutButtonText } from '../config/config';
import { AuthTitle } from 'shared/ui';

export const Profile = () => {
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('submit');
  }

  function handleLogout() {
    console.log('logout');
  }

  return (
    <section className={styles.profile}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.titleContent}>
            <AuthTitle>
              { `${greeting}, ${currentUser.name}!`}
            </AuthTitle>
          </div>

          <ProfileForm
            onSubmit={handleSubmit}
            currentUser={currentUser}
            className={styles.form}
          />

          <div className={styles.logoutButtonContent}>
            <ProfileButton onClick={handleLogout} className={styles.button}>
              {logoutButtonText}
            </ProfileButton>
          </div>

        </div>
      </div>
    </section>
  )
}
