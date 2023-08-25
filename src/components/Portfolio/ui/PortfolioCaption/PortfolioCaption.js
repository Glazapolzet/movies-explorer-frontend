import React from 'react';
import styles from './PortfolioCaption.module.css';
import { Caption } from 'shared/ui';

export const PortfolioCaption = ({ children }) => {
  return (
    <Caption className={styles.caption}>
      {children}
    </Caption>
  )
}
