import React, { useState } from 'react';
import styles from './ProfileForm.module.css';
import { Form, Stroke } from 'shared/ui';
import { ProfileInput } from '../ProfileInput/ProfileInput';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { AuthButton } from 'entities/auth-button';
import { useFormWithValidation } from 'shared/lib';
import { authButtonText, submitButtonText } from '../../config/config';
import { nameInput, emailInput } from 'shared/config';

const makeDefaultInputValues = (user) => {
  return {
    [`${nameInput.name}`]: user.name,
    [`${emailInput.name}`]: user.email,
  }
};

export const ProfileForm = ({ onSubmit, currentUser, className = '' }) => {
  const { values, handleChange, isValid, errors, resetForm } = useFormWithValidation(makeDefaultInputValues(currentUser));

  const [onEdit, setOnEdit] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isSubmitButtonVisible = !onEdit;
  const isAuthButtonVisible = onEdit;

  function handleEdit(evt) {
    evt.preventDefault();

    setOnEdit(true);

    resetForm(makeDefaultInputValues(currentUser));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit(values)
      .then(() => {
        setOnEdit(false);
      })
      .catch((err) => {
        setSubmitError(err.message);
      });
  }

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <ProfileInput
          required={true}
          type={'text'}
          minLength={'2'}
          maxLength={'30'}
          id={nameInput.id}
          name={nameInput.name}
          label={nameInput.label}
          value={values[nameInput.name]}
          onChange={handleChange}
          disabled={!onEdit}
          isValid={errors[nameInput.name] === ''}
        />
        <Stroke className={styles.stroke} />
        <ProfileInput
          type={'email'}
          required={true}
          id={emailInput.id}
          name={emailInput.name}
          label={emailInput.label}
          value={values[emailInput.name]}
          onChange={handleChange}
          disabled={!onEdit}
          isValid={errors[emailInput.name] === ''}
        />
      </div>

      <div className={styles.submitButtonContent}>
        { isSubmitButtonVisible && (
          <ProfileButton onClick={handleEdit} className={styles.button}>
            {submitButtonText}
          </ProfileButton>
        )}

        { isAuthButtonVisible && (
          <AuthButton
            disabled={!isValid}
            buttonText={authButtonText}
            errorText={submitError}
            isErrorVisible={submitError !== ''}
          />
        )}
      </div>
    </Form>
  )
}
