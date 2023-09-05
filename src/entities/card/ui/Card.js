import React from 'react';
import styles from './Card.module.css';
import { Caption, Link } from 'shared/ui';

export const Card = ({ link, image, title, caption, ButtonComponent }) => {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <img
          className={styles.image}
          src={image}
          alt={title}
        />
      </Link>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h5 className={styles.title}>
              {title}
            </h5>
            <Caption className={styles.caption}>
              {caption}
            </Caption>
          </div>

          <div className={styles.buttonContent}>
            {ButtonComponent}
          </div>
        </div>
      </div>
    </div>
  )
}