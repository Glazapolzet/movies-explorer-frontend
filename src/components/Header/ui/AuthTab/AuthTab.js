import React from 'react';
import styles from './AuthTab.module.css';
import { Link } from 'shared/ui';

export const AuthTab = ({ links }) => {
  const { registration, login } = links;

  return (
    <div className={styles.authTab}>
      <Link
        className={`${styles.link} ${styles.link_default}`}
        href={registration.href}
      >
        {registration.text}
      </Link>

      <Link
        className={`${styles.link} ${styles.link_landing}`}
        href={login.href}
      >
        {login.text}
      </Link>
    </div>
  )
}
