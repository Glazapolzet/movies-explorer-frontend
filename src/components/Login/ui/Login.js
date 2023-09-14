import React from 'react';
import styles from './Login.module.css';
import { CaptionWithLink } from 'entities/caption-with-link';
import { Auth } from 'entities/auth';
import { LoginForm } from './LoginForm/LoginForm';
import { caption, title } from '../config/config';

export const Login = ({ onSubmit }) => {
  return (
    <section className={styles.login}>
      <Auth
        title={title}
        formComponent={
          <LoginForm onSubmit={onSubmit} />
        }
        captionComponent={
          <CaptionWithLink caption={caption} />
        }
      />
    </section>
  )
}
