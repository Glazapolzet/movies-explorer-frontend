import React from 'react';
import styles from './BurgerMenu.module.css';
import { Button } from 'shared/ui';
import burgerMenuIcon from 'assets/images/burger_menu.svg';

export const BurgerMenu = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${burgerMenuIcon})`}}
      />
    </Button>
  )
}
