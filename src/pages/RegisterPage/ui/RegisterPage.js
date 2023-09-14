import React, { useContext } from 'react';
import styles from './RegisterPage.module.css';
import { Register } from 'components/Register';
import { mainApi } from 'shared/api/main';
import { AuthorizedContext } from 'shared/contexts';

const RegisterPage = () => {
  const { setAuthorized } = useContext(AuthorizedContext);

  function handleSubmit({ name, email, password }) {
    return mainApi.register({ name, email, password })
      .then(() => {
        mainApi.login({ email, password })
          .then(() => {
            setAuthorized(true);
          })
          .catch((err) => console.log(err));
      })
  }

  return (
    <main className={styles.main}>
      <Register onSubmit={handleSubmit} />
    </main>
  )
}

export default RegisterPage;
