import React from 'react';
import { Link } from 'shared/ui';
import styles from './AuthLink.module.css'

export const AuthLink = ({ href, children }) => {
  return (
    <Link
      className={styles.link}
      href={href}
    >
      {children}
    </Link>
  )
}
