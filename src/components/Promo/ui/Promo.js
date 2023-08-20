import React from 'react';
import styles from './Promo.module.css';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  )
}