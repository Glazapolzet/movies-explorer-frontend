import React from 'react';
import styles from './CrossIcon.module.css';

export const CrossIcon = ({ url, className = '' }) => {
  return (
    <div
      className={`${styles.icon} ${className}`}
      style={{backgroundImage: `url(${url})`}}
    />
  )
}
