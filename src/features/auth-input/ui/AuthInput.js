import React from 'react';
import styles from './AuthInput.module.css';

export const AuthInput = ({ id, name, label, value, onChange, isValid, errorComponent, ...props }) => {
  const inputErrorClass = isValid
    ? ''
    : styles.input_error;

  return (
      <div className={styles.container}>
        <label
          className={styles.label}
          htmlFor={id}
        >
          {label}
        </label>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${inputErrorClass}`}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            {...props}
          />
          <div className={styles.errorContainer}>
            {errorComponent}
          </div>
        </div>
      </div>
  )
}
