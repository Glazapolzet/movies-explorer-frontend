import React from 'react';
import styles from './Bar.module.css';

export const Bar = ({ children, className = '' }) => {
  return (
    <div className={`${styles.bar} ${className}`}>
      <p className={styles.text}>
        {children}
      </p>
    </div>
  )
}
