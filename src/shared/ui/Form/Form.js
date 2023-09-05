import React from 'react';
import styles from './Form.module.css';

export const Form = ({ onSubmit, children, className = '' }) => {
  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={onSubmit}
    >
      <fieldset className={styles.fieldset}>
        {children}
      </fieldset>
    </form>
  )
}
