import React from 'react';
import styles from './StudentLink.module.css';
import { Link } from 'shared/ui';

export const StudentLink = ({ href, children, ...props }) => {
  return (
    <Link
      className={styles.link}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
