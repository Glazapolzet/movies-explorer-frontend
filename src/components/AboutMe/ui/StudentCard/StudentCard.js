import React from 'react';
import styles from './StudentCard.module.css';

export const StudentCard = ({ image }) => {
  const {src, alt} = image;

  return (
    <img
      className={styles.card}
      src={src}
      alt={alt}
    />
  )
}
