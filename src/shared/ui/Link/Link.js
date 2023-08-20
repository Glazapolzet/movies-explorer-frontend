import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

export const Link = ({ to, children }) => {
  return (
    <RouterLink
      to={to}
      className={styles.link}
    >
      {children}
    </RouterLink>
  )
}
