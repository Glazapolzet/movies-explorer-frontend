import React from 'react';
import styles from './Register.module.css';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { CaptionWithLink } from 'entities/caption-with-link';
import { Auth } from 'entities/auth';
import { caption, title } from '../config/config';

export const Register = ({ onSubmit }) => {
  return (
    <section className={styles.register}>
      <Auth
        title={title}
        formComponent={
          <RegisterForm onSubmit={onSubmit} />
        }
        captionComponent={
          <CaptionWithLink caption={caption} />
        }
      />
    </section>
  )
}
