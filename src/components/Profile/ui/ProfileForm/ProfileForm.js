import React, { useState } from 'react';
import styles from './ProfileForm.module.css';
import { Form, Stroke } from 'shared/ui';
import { ProfileInput } from '../ProfileInput/ProfileInput';
import { authButtonText, submitButtonText } from '../../config/config';
import { nameInput, emailInput } from 'shared/config';
import { useFormWithValidation } from 'shared/lib';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { AuthButton } from 'features/auth-button';

export const ProfileForm = ({ onSubmit, currentUser, className = '' }) => {
  const { values, handleChange, isValid, errors } = useFormWithValidation({
    [`${nameInput.name}`]: currentUser.name,
    [`${emailInput.name}`]: currentUser.email,
  });

  const [onEdit, setOnEdit] = useState(false);

  const submitButtonLayoutHiddenClassname = onEdit
    ? styles.submitButtonLayout_hidden
    : '';

  const authButtonLayoutHiddenClassname = onEdit
    ? ''
    : styles.authButtonLayout_hidden;

  function handleEdit(evt) {
    evt.preventDefault();

    setOnEdit(true);
  }

  function handleSubmit(evt) {
    onSubmit(evt);

    setOnEdit(false);
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
        <div className={`${styles.submitButtonLayout} ${submitButtonLayoutHiddenClassname}`}>
          <ProfileButton onClick={handleEdit} className={styles.button}>
            {submitButtonText}
          </ProfileButton>
        </div>

        <div className={`${styles.authButtonLayout} ${authButtonLayoutHiddenClassname}`}>
          <AuthButton disabled={!isValid}>
            {authButtonText}
          </AuthButton>
        </div>
      </div>
    </Form>
  )
}
