import React, { useContext } from 'react';
import styles from './Profile.module.css';
import { ProfileForm } from './ProfileForm/ProfileForm';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { AuthTitle } from 'shared/ui';
import { CurrentUserContext } from 'shared/contexts';
import { greeting, logoutButtonText } from '../config/config';

export const Profile = ({ onSubmit, onLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className={styles.profile}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.titleContent}>
            <AuthTitle>
              {`${greeting}, ${currentUser.name}!`}
            </AuthTitle>
          </div>

          <ProfileForm
            currentUser={currentUser}
            onSubmit={onSubmit}
            className={styles.form}
          />

          <div className={styles.logoutButtonContent}>
            <ProfileButton
              onClick={onLogout}
              className={styles.button}
            >
              {logoutButtonText}
            </ProfileButton>
          </div>

        </div>
      </div>
    </section>
  )
}
