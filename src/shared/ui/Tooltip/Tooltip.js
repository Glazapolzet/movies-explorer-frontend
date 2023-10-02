import React from 'react';
import styles from './Tooltip.module.css';
import { Button } from '../Button/Button';
import cross from 'assets/images/icon_cross.svg';

export const Tooltip = ({ caption, icon, isOpen, onClose }) => {
  const visibleClassName = isOpen
    ? styles.popup_opened
    : '';

  return (
    <div
      className={`${styles.popup} ${visibleClassName}`}
    >
      <div className={styles.layout}>
        <div
          className={`${styles.icon} ${styles.icon_type_status}`}
          style={{backgroundImage: `url(${icon})`}}
        />

        <p className={styles.caption}>{caption}</p>

        <Button className={styles.button} onClick={onClose}>
          <div
            className={`${styles.icon} ${styles.icon_type_cross}`}
            style={{backgroundImage: `url(${cross})`}}
          />
        </Button>
      </div>
    </div>
  )
}
