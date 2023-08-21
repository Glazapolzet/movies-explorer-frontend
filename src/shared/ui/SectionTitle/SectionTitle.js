import React from 'react';
import styles from './SectionTitle.module.css';

export const SectionTitle = ({ id, children }) => {
  return (
    <div
      id={id}
      className={styles.sectionTitle}
    >
      <h2 className={styles.title}>
        {children}
      </h2>
      <div className={styles.underline} />
    </div>
  )
}
