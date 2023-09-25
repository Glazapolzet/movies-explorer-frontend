import React from 'react';
import styles from './Stroke.module.css';

export const Stroke = ({ className = '' }) => {
  return (
    <div className={`${styles.stroke} ${className}`} />
  )
}
