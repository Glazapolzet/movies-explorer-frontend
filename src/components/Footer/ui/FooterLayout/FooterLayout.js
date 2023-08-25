import React from 'react';
import styles from './FooterLayout.module.css';

export const FooterLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
