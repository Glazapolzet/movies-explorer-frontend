import React from 'react';
import styles from './SearchInput.module.css';

export const SearchInput = ({ id, name, value, placeholder, onChange, isValid, ...props }) => {
  const inputErrorClass = isValid
    ? ''
    : styles.input_error;

  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${inputErrorClass}`}
      placeholder={placeholder}
      {...props}
    />
  )
}
