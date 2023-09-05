import React from 'react';
import styles from './AuthButton.module.css';

import { SubmitButton } from 'shared/ui';

export const AuthButton = ({ disabled, children }) => {
  const disabledButtonClass = disabled
    ? styles.button_disabled
    : '';

  const disabledTextClass = disabled
    ? styles.text_disabled
    : '';

  return (
    <SubmitButton
      className={`${styles.button} ${disabledButtonClass}`}
      disabled={disabled}
    >
      <p className={`${styles.text} ${disabledTextClass}`}>
        {children}
      </p>
    </SubmitButton>
  )
}
