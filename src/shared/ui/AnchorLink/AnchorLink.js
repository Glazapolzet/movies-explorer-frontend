import React from 'react';
import styles from './AnchorLink.module.css';

export const AnchorLink = ({ href, className, children }) => {
  return (
    <a
      className={`${styles.link} ${className}`}
      href={href}
    >
      {children}
    </a>
  )
}
