import React from 'react';
import styles from './SearchInput.module.css';

export const SearchInput = ({ name, placeholder }) => {
  return (
    <input
      name={name}
      type={'text'}
      className={styles.input}
      placeholder={placeholder}
    />
  )
}
