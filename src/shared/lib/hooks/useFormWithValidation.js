import { useCallback, useState } from 'react';

export function useFormWithValidation(initialValue = {}) {
  const [values, setValues] = useState(initialValue);

  const defaultErrorsState = Object.keys(initialValue).reduce((previousValue, currentValue) => {
    return {...previousValue, [currentValue]: ''}
  }, {});

  const [errors, setErrors] = useState(defaultErrorsState);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = defaultErrorsState, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
