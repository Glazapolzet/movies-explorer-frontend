import React from 'react';
import styles from './Caption.module.css';

export const Caption = ({ className, children }) => {
  return (
    <p className={`${styles.caption} ${className}`}>
      {children}
    </p>
  )
}
