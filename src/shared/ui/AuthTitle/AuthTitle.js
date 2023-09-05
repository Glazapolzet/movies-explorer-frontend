import React from 'react';
import styles from './AuthTitle.module.css';

export const AuthTitle = ({ children }) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}
