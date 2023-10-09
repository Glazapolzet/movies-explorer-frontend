import React, {useEffect, useState} from 'react';
import styles from './ProfileForm.module.css';
import { Form, Stroke } from 'shared/ui';
import { ProfileInput } from '../ProfileInput/ProfileInput';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { AuthButton } from 'entities/auth';
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

  const [isOnEdit, setIsOnEdit] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSameUserData, setIsSameUserData] = useState(checkIfSameUserData());
  const [isFormOnSubmit, setIsFormOnSubmit] = useState(false);

  const isSubmitButtonVisible = !isOnEdit;
  const isAuthButtonVisible = isOnEdit;

  useEffect(() => {
    setIsSameUserData(checkIfSameUserData());
  }, [isOnEdit, values]);

  function checkIfSameUserData() {
    return values[nameInput.name] === currentUser.name && values[emailInput.name] === currentUser.email;
  }

  function handleEdit(evt) {
    evt.preventDefault();

    setIsOnEdit(true);

    resetForm(makeDefaultInputValues(currentUser));
    setSubmitError('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setIsFormOnSubmit(true);

    onSubmit(values)
      .then(() => {
        setIsOnEdit(false);
      })
      .catch((err) => {
        setSubmitError(err.message);
      })
      .finally(() => setIsFormOnSubmit(false));
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
          disabled={!isOnEdit || isFormOnSubmit}
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
          disabled={!isOnEdit || isFormOnSubmit}
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
            disabled={!isValid || isSameUserData || isFormOnSubmit}
            buttonText={authButtonText}
            errorText={submitError}
            isErrorVisible={submitError !== ''}
          />
        )}
      </div>
    </Form>
  )
}
