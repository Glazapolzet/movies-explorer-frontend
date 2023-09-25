import React from 'react';
import styles from './SectionLayout.module.css';

export const SectionLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
