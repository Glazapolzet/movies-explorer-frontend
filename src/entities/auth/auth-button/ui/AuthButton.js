import React from 'react';
import styles from './AuthButton.module.css';
import { SubmitButton } from 'shared/ui';
import { ErrorText } from 'shared/ui';

export const AuthButton = ({ disabled, isErrorVisible, errorText, buttonText }) => {
  const disabledButtonClass = disabled
    ? styles.button_disabled
    : '';

  const disabledTextClass = disabled
    ? styles.text_disabled
    : '';

  return (
    <div className={styles.buttonContent}>
      <ErrorText
        isVisible={isErrorVisible}
        className={styles.error}
      >
        {errorText}
      </ErrorText>

      <SubmitButton
        className={`${styles.button} ${disabledButtonClass}`}
        disabled={disabled}
      >
        <p className={`${styles.text} ${disabledTextClass}`}>
          {buttonText}
        </p>
      </SubmitButton>
    </div>
  )
}
