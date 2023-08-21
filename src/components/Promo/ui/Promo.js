import React from 'react';
import styles from './Promo.module.css';
import { promoTitle } from './config/config';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {promoTitle}
        </h1>
      </div>
    </section>
  )
}