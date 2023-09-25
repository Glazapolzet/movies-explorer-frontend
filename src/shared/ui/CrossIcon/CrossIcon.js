import React from 'react';
import styles from './CrossIcon.module.css';
import crossIcon from 'assets/images/icon_cross.svg';

export const CrossIcon = ({ className = '' }) => {
  return (
    <div
      className={`${styles.icon} ${className} `}
      style={{backgroundImage: `url(${crossIcon})`}}
    />
  )
}
