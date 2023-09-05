import React from 'react';
import styles from './LoginPage.module.css';
import { Login } from 'components/Login';

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  )
}

export default LoginPage;
