import React from 'react';
import styles from './ErrorText.module.css';

export const ErrorText = ({ isVisible, children, className = '' }) => {
  const visibleClassName = isVisible
    ? styles.error_visible
    : '';

  return (
    <span className={`${styles.error} ${visibleClassName} ${className}`}>
      {children}
    </span>
  )
}
