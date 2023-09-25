import React from 'react';
import styles from './Login.module.css';
import { CaptionWithLink } from 'entities/caption-with-link';
import { Auth } from 'entities/auth';
import { LoginForm } from './LoginForm/LoginForm';
import { caption, title } from '../config/config';

export const Login = () => {

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('submit');
  }

  return (
    <section className={styles.login}>
      <Auth
        title={title}
        formComponent={
          <LoginForm onSubmit={handleSubmit} />
        }
        captionComponent={
          <CaptionWithLink caption={caption} />
        }
      />
    </section>
  )
}
