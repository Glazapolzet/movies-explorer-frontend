import React from 'react';
import styles from './LandingIcon.module.css';

export const LandingIcon = ({ text }) => {
  return (
    <div className={styles.icon}>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  )
}
