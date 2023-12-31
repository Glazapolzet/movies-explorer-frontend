import React from 'react';
import styles from './Title.module.css';

export const Title = ({ children, className = '' }) => {
  return (
    <h2 className={`${styles.title} ${className}`}>
      {children}
    </h2>
  )
}
