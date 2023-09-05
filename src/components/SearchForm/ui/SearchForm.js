import React from 'react';
import styles from './SearchForm.module.css';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { checkboxCaption, searchInput } from '../config/config';
import { FilterCheckbox } from './FilterCheckbox/FilterCheckbox';
import { Form, Stroke } from 'shared/ui';
import { useFormWithValidation } from 'shared/lib';

export const SearchForm = () => {

  const { values, handleChange, errors, isValid } = useFormWithValidation({
    [`${searchInput.name}`]: '',
  });

  const inputPlaceholder = errors[searchInput.name] === ''
    ? searchInput.placeholder
    : errors[searchInput.name];

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('search..');
  }

  return (
    <section className={styles.searchForm}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            <Form
              onSubmit={handleSubmit}
              className={styles.searchPanel}
            >
              <SearchInput
                required={true}
                type={'text'}
                id={searchInput.id}
                name={searchInput.name}
                value={values[searchInput.name]}
                onChange={handleChange}
                placeholder={inputPlaceholder}
                isValid={errors[searchInput.name] === ''}
              />
              <SearchButton disabled={!isValid} />
            </Form>

            <FilterCheckbox
              atOn={() => console.log('filter on')}
              atOff={() => console.log('filter off')}
              caption={checkboxCaption}
            />
          </div>
        </div>

        <Stroke className={styles.stroke} />
      </div>
    </section>
  )
}
