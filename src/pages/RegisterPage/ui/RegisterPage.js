import React from 'react';
import styles from './RegisterPage.module.css';
import { Register } from 'components/Register';
import { useAuth } from 'entities/auth';

const RegisterPage = ({ onRegister }) => {
  const { register } = useAuth();

  function handleSubmit({ name, email, password }) {
    return register({ name, email, password })
      .then(() => onRegister())
  }

  return (
    <main className={styles.main}>
      <Register onSubmit={handleSubmit} />
    </main>
  )
}

export default RegisterPage;
