import React from 'react';
import styles from './SearchForm.module.css';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { inputPlaceholder, checkboxCaption } from '../config/config';
import { FilterCheckbox } from './FilterCheckbox/FilterCheckbox';
import { Stroke } from 'shared/ui';

export const SearchForm = () => {
  return (
    <section className={styles.searchForm}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.searchPanel}>
              <SearchInput placeholder={inputPlaceholder} />
              <SearchButton onClick={() => console.log('search..')} />
            </div>

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
