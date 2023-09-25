import { useState } from 'react';

export const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}
