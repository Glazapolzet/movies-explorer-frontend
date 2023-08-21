import React from 'react';
import styles from './SectionTitle.module.css';

export const SectionTitle = ({ children }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={styles.title}>
        {children}
      </h2>
      <div className={styles.underline} />
    </div>
  )
}
