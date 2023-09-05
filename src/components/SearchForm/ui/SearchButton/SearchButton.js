import React from 'react';
import styles from './SearchButton.module.css';
import searchIcon from 'assets/images/icon_search.svg';
import { SubmitButton } from 'shared/ui';

export const SearchButton = ({ disabled, ...props }) => {
  return (
    <SubmitButton
      className={styles.button}
      disabled={disabled}
      {...props}
    >
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${searchIcon})`}}
      />
    </SubmitButton>
  )
}
