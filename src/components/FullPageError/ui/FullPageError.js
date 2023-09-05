import React from 'react';
import styles from './FullPageError.module.css';

export const FullPageError = ({ error, LinkComponent }) => {
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.errorCode}>
            {error.code}
          </h1>
          <span className={styles.errorText}>
            {error.text}
          </span>
        </div>

        <div className={styles.linkContent}>
          {LinkComponent}
        </div>
      </div>
    </section>
  )
}
