import React from 'react';
import styles from './SubmitButton.module.css';

export const SubmitButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`${styles.button} ${className} `}
      type={'submit'}
      {...props}
    >
      {children}
    </button>
  )
}