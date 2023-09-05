import React from 'react';
import styles from './ProfileInput.module.css';

export const ProfileInput = ({ id, name, label, value, onChange, ...props }) => {
  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
