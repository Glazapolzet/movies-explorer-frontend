import React from 'react';
import styles from './ProfileButton.module.css';
import { Button } from 'shared/ui';

export const ProfileButton = ({ onClick, children, className = '' }) => {
  return (
    <Button onClick={onClick}>
      <p className={`${styles.text} ${className}`}>
        {children}
      </p>
    </Button>
  )
}
