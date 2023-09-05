import React from 'react';
import styles from './SearchButton.module.css';
import searchIcon from 'assets/images/icon_search.svg';
import { Button } from 'shared/ui';

export const SearchButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${searchIcon})`}}
      />
    </Button>
  )
}
