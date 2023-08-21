import React from 'react';
import { Link } from 'shared/ui';
import styles from './AuthLink.module.css'

export const AuthLink = ({ to, children }) => {
  return (
    <Link
      to={to}
    >
      <p className={styles.text}>
        {children}
      </p>
    </Link>
  )
}
