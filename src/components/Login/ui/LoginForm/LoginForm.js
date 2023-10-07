import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { AuthInput } from 'entities/auth';
import { AuthButton } from 'entities/auth';
import { AuthForm } from 'entities/auth';
import { ErrorText } from 'features/error-text';
import { useFormWithValidation } from 'shared/lib';
import { emailInput, passwordInput } from 'shared/config';
import { authButtonText } from '../../config/config';

const makeDefaultInputValues = () => {
  return {
    [`${emailInput.name}`]: '',
    [`${passwordInput.name}`]: '',
  }
};

export const LoginForm = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation(makeDefaultInputValues());

  const [submitError, setSubmitError] = useState('');
  const [isFormOnSubmit, setIsFormOnSubmit] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();

    setIsFormOnSubmit(true);

    onSubmit(values)
      .then(() => {
        resetForm(makeDefaultInputValues());
      })
      .catch((err) => {
        setSubmitError(err.message);
      })
      .finally(() => setIsFormOnSubmit(false));
  }

  return (
    <AuthForm onSubmit={handleSubmit}>
      <div className={styles.container}>
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
          isValid={errors[emailInput.name] === ''}
          disabled={isFormOnSubmit}
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
          isValid={errors[passwordInput.name] === ''}
          disabled={isFormOnSubmit}
        />
      </div>

      <AuthButton
        disabled={!isValid || isFormOnSubmit}
        buttonText={authButtonText}
        errorText={submitError}
        isErrorVisible={submitError !== ''}
      />
    </AuthForm>
  )
}
