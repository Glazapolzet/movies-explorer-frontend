import React from 'react';
import styles from './Form.module.css';

export const Form = ({ onSubmit, children, className = '', ...props }) => {
  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={onSubmit}
      {...props}
    >
      <fieldset className={styles.fieldset}>
        {children}
      </fieldset>
    </form>
  )
}
