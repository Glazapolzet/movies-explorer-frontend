import React from 'react';
import styles from './FooterCaption.module.css';
import { Caption } from 'shared/ui';

export const FooterCaption = ({ children }) => {
  return (
    <div className={styles.content}>
      <Caption className={styles.caption}>
        {children}
      </Caption>
    </div>
  )
}
