import React from 'react';
import styles from './StudentLink.module.css';
import { Link } from 'shared/ui';

export const StudentLink = ({ href, children }) => {
  return (
    <Link
      className={styles.link}
      href={href}
    >
      {children}
    </Link>
  )
}
