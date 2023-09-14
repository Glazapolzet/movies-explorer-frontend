import React, { useContext } from 'react';
import styles from './LoginPage.module.css';
import { mainApi } from 'shared/api/main';
import { Login } from 'components/Login';
import { AuthorizedContext } from 'shared/contexts';

const LoginPage = () => {
  const { setAuthorized } = useContext(AuthorizedContext);

  function handleSubmit({ email, password }) {
    return mainApi.login({ email, password })
      .then(() => setAuthorized(true))
  }

  return (
    <main className={styles.main}>
      <Login onSubmit={handleSubmit} />
    </main>
  )
}

export default LoginPage;
