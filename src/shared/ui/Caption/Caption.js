import React from 'react';
import styles from './Caption.module.css';

export const Caption = ({ children, className = '' }) => {
  return (
    <p className={`${styles.caption} ${className}`}>
      {children}
    </p>
  )
}
