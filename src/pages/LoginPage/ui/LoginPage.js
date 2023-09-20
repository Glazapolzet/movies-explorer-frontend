import React from 'react';
import styles from './LoginPage.module.css';
import { Login } from 'components/Login';
import { useAuth } from 'entities/auth';

const LoginPage = () => {
  const { login } = useAuth();

  function handleSubmit({ email, password }) {
    return login({ email, password });
  }

  return (
    <main className={styles.main}>
      <Login onSubmit={handleSubmit} />
    </main>
  )
}

export default LoginPage;
