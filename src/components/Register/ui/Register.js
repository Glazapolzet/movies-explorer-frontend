import React from 'react';
import styles from './Register.module.css';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { CaptionWithLink } from 'entities/caption-with-link';
import { Auth } from 'entities/auth';
import { caption, title } from '../config/config';

export const Register = () => {

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('submit');
  }

  return (
    <section className={styles.register}>
      <Auth
        title={title}
        formComponent={
          <RegisterForm onSubmit={handleSubmit} />
        }
        captionComponent={
          <CaptionWithLink caption={caption} />
        }
      />
    </section>
  )
}
