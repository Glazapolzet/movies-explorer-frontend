import React from 'react';
import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.container}>
        <span className={styles.round} />
      </div>
    </div>
  )
};
