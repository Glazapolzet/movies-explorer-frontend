import React from 'react';
import styles from './FooterLink.module.css';
import { Link } from 'shared/ui';

export const FooterLink = ({ href, children }) => {
  return (
    <Link
      className={styles.link}
      href={href}
    >
      {children}
    </Link>
  )
}
