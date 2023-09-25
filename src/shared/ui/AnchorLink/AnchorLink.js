import React from 'react';
import styles from './AnchorLink.module.css';

export const AnchorLink = ({ href, children, className = '' }) => {
  return (
    <a
      className={`${styles.link} ${className}`}
      href={href}
    >
      {children}
    </a>
  )
}
