import React from 'react';
import styles from './LinkWithIcon.module.css';
import { Link } from '../Link/Link';

export const LinkWithIcon = ({ href, icon, children, ...props }) => {
  return (
    <Link
      href={href}
      {...props}
    >
      <div className={styles.container}>
        <p className={styles.text}>
          {children}
        </p>
        <div
          className={styles.icon}
          style={{backgroundImage: `url(${icon})`}}
        />
      </div>
    </Link>
  )
}
