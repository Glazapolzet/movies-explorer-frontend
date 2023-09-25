import React from 'react';
import styles from './Promo.module.css';
import { promoTitle } from '../config/config';
import { Title } from 'shared/ui/Title/Title';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.content}>
        <Title className={styles.title}>
          {promoTitle}
        </Title>
      </div>
    </section>
  )
}
