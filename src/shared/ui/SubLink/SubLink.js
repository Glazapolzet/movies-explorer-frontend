import React from 'react';
import { Link } from 'shared/ui';
import styles from './SubLink.module.css'

export const SubLink = ({ href, children }) => {
  return (
    <Link
      className={styles.link}
      href={href}
    >
      {children}
    </Link>
  )
}
