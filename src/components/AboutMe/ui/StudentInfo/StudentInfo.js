import React from 'react';
import styles from './StudentInfo.module.css';
import { Title } from 'shared/ui';

export const StudentInfo = ({ content }) => {
  const {name, description, about} = content;

  return (
    <div className={styles.studentInfo}>
      <Title className={styles.title}>
        {name}
      </Title>
      <p className={styles.description}>
        {description}
      </p>

      <p className={styles.about}>
        {about}
      </p>
    </div>
  )
}
