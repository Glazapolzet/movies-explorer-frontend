import React from 'react';
import styles from './RegisterPage.module.css';
import { Register } from 'components/Register';

const RegisterPage = () => {
  return (
    <main className={styles.main}>
      <Register />
    </main>
  )
}

export default RegisterPage;
