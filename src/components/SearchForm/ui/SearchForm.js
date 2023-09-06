import React, {useState} from 'react';
import styles from './SearchForm.module.css';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { checkboxCaption, searchInput } from '../config/config';
import { FilterCheckbox } from './FilterCheckbox/FilterCheckbox';
import { Form, Stroke } from 'shared/ui';
import { useForm } from 'shared/lib';

export const SearchForm = () => {

  const { values, handleChange: handleInputChange } = useForm({
    [`${searchInput.name}`]: '',
  });

  const [isEmpty, setEmpty] = useState(false);

  const inputPlaceholder = isEmpty
    ? searchInput.placeholderEmpty
    : searchInput.placeholder;

  function handleChange(evt) {
    setEmpty(false);

    handleInputChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (values[searchInput.name] === '') {
      setEmpty(true);
      return;
    }

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
                isValid={!isEmpty}
              />
              <SearchButton />
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
