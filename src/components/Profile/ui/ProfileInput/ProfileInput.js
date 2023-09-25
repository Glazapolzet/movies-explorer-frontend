import React from 'react';
import styles from './ProfileInput.module.css';

export const ProfileInput = ({ id, name, label, value, onChange, isValid, ...props }) => {
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
      <input
        className={`${styles.input} ${inputErrorClass}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
