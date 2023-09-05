import React from 'react';
import styles from './RegisterForm.module.css';
import { AuthInput } from 'features/auth-input';
import { AuthButton } from 'features/auth-button';
import { AuthForm } from 'features/auth-form';
import { ErrorText } from 'features/error-text';
import { useFormWithValidation } from 'shared/lib';
import { nameInput, emailInput, passwordInput } from 'shared/config';
import { authButtonText } from '../../config/config';

export const RegisterForm = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    [`${nameInput.name}`]: '',
    [`${emailInput.name}`]: '',
    [`${passwordInput.name}`]: '',
  });

  return (
    <AuthForm onSubmit={onSubmit}>
      <div className={styles.container}>
        <AuthInput
          required={true}
          type={'text'}
          minLength={'2'}
          maxLength={'30'}
          id={nameInput.id}
          name={nameInput.name}
          label={nameInput.label}
          value={values[nameInput.name]}
          errorComponent={
            <ErrorText isVisible={errors[nameInput.name] !== ''}>
              {errors[nameInput.name]}
            </ErrorText>
          }
          onChange={handleChange}
          isValid={!errors[nameInput.name]}
        />
        <AuthInput
          required={true}
          type={'email'}
          id={emailInput.id}
          name={emailInput.name}
          label={emailInput.label}
          value={values[emailInput.name]}
          errorComponent={
            <ErrorText isVisible={errors[emailInput.name] !== ''}>
              {errors[emailInput.name]}
            </ErrorText>
          }
          onChange={handleChange}
          isValid={!errors[emailInput.name]}
        />
        <AuthInput
          required={true}
          type={'password'}
          id={passwordInput.id}
          name={passwordInput.name}
          label={passwordInput.label}
          value={values[passwordInput.name]}
          errorComponent={
            <ErrorText isVisible={errors[passwordInput.name] !== ''}>
              {errors[passwordInput.name]}
            </ErrorText>
          }
          onChange={handleChange}
          isValid={!errors[passwordInput.name]}
        />
      </div>

      <AuthButton disabled={!isValid}>
        {authButtonText}
      </AuthButton>
    </AuthForm>
  )
}
