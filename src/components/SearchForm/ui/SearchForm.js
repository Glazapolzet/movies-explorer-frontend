import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { checkboxCaption, searchInput } from '../config/config';
import { FilterCheckbox } from './FilterCheckbox/FilterCheckbox';
import { Form, Stroke } from 'shared/ui';
import { useForm } from 'shared/lib';

export const SearchForm = ({ onSearch, onFilter, offFilter, isFilterActive, initialValue }) => {

  const { values, handleChange: handleInputChange } = useForm({
    [`${searchInput.name}`]: initialValue,
  });

  const [isFormEmpty, setFormEmpty] = useState(false);

  const inputPlaceholder = isFormEmpty
    ? searchInput.placeholderEmpty
    : searchInput.placeholder;

  function handleChange(evt) {
    setFormEmpty(false);

    handleInputChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const inputQuery = values[searchInput.name];

    if (inputQuery === '') {
      setFormEmpty(true);
      return;
    }

    onSearch(inputQuery);
  }

  return (
    <section className={styles.searchForm}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            <Form
              onSubmit={handleSubmit}
              className={styles.searchPanel}
              noValidate={true}
            >
              <SearchInput
                required={true}
                type={'text'}
                id={searchInput.id}
                name={searchInput.name}
                value={values[searchInput.name]}
                onChange={handleChange}
                placeholder={inputPlaceholder}
                isValid={!isFormEmpty}
              />
              <SearchButton />
            </Form>

            <FilterCheckbox
              atOn={onFilter}
              atOff={offFilter}
              isActive={isFilterActive}
              caption={checkboxCaption}
            />
          </div>
        </div>

        <Stroke className={styles.stroke} />
      </div>
    </section>
  )
}
