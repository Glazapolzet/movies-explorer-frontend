import { useCallback, useState } from 'react';
import validator from 'validator';

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

    prevalidate(target);

    setValues({...values, [name]: target.value});
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

  function prevalidate(target) {
    const type = target.type;
    const value = target.value;

    switch (true) {
      case target.validity.valueMissing:
        target.setCustomValidity('Заполните это поле');
        return;
      case type === 'email' && !validator.isEmail(value):
        target.setCustomValidity('Некорректный формат email');
        return;
      case target.validity.tooLong:
        target.setCustomValidity('Длина поля больше допустимой');
        return;
      case target.validity.tooShort:
        target.setCustomValidity('Длина поля меньше допустимой');
        return;
      case target.validity.typeMismatch:
        target.setCustomValidity('Поле содержит неподдерживаемые символы');
        return;
      default:
        target.setCustomValidity('');
        return;
    }
  }

  return { values, handleChange, errors, isValid, resetForm };
}
