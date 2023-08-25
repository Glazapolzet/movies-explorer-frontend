import React from 'react';
import styles from './SectionTitle.module.css';
import { Stroke } from '../Stroke/Stroke';

export const SectionTitle = ({ id, children }) => {
  return (
    <div
      id={id}
      className={styles.sectionTitle}
    >
      <h3 className={styles.title}>
        {children}
      </h3>
      <Stroke className={styles.stroke} />
    </div>
  )
}
