import React from 'react';
import styles from './StageBar.module.css';
import { Bar, Caption } from 'shared/ui';

export const StageBar = ({ content }) => {
  const { accentBar, normalBar } = content;

  return (
    <div className={styles.stageBar}>
      <div className={styles.container}>
        <Bar className={`${styles.bar} ${styles.bar_theme_accent}`}>
          {accentBar.text}
        </Bar>

        <Bar className={`${styles.bar} ${styles.bar_theme_normal}`}>
          {normalBar.text}
        </Bar>
      </div>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Caption className={styles.caption}>
            {accentBar.caption}
          </Caption>
        </div>

        <div className={styles.wrapper}>
          <Caption className={styles.caption}>
            {normalBar.caption}
          </Caption>
        </div>
      </div>
    </div>
  )
}
