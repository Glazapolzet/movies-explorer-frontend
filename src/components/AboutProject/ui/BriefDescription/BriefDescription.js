import React from 'react';
import styles from './BriefDescription.module.css';

export const BriefDescription = ({ content }) => {
  const { title, description } = content;

  return (
    <div className={styles.briefDescription}>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  )
}
