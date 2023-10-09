import React from 'react';
import styles from './SavedMoviesCardCrossButton.module.css';
import { CrossButton } from 'features/cross-button';
import crossIconSmall from 'assets/images/icon_cross_small.svg';

export const SavedMoviesCardCrossButton = ({ onClick }) => {
  return (
    <CrossButton
      iconUrl={crossIconSmall}
      onClick={onClick}
      className={styles.icon}
    />
  )
}
