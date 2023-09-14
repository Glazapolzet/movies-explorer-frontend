import React from 'react';
import styles from './MenuCrossButton.module.css';
import crossIcon from 'assets/images/icon_cross.svg';
import { CrossButton } from 'features/cross-button';

export const MenuCrossButton = ({ onClick }) => {
  return (
    <CrossButton
      iconUrl={crossIcon}
      onClick={onClick}
      className={styles.icon}
    />
  )
}
