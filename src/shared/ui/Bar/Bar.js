import React from 'react';
import styles from './Bar.module.css';

export const Bar = ({ className, children }) => {
  return (
    <div className={`${styles.bar} ${className}`}>
      <p className={styles.text}>
        {children}
      </p>
    </div>
  )
}
