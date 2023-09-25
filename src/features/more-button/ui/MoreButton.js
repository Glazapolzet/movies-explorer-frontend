import React from 'react';
import styles from './MoreButton.module.css';

import { Button } from 'shared/ui';

export const MoreButton = ({ onClick, children }) => {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
    >
      <p className={styles.text}>
        {children}
      </p>
    </Button>
  )
}
