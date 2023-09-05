import React from 'react';
import styles from './SavedMoviesPage.module.css';
import { SearchForm } from 'components/SearchForm';
import { SavedMoviesCards } from 'components/SavedMoviesCards';

const SavedMoviesPage = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <SavedMoviesCards />
    </main>
  )
}

export default SavedMoviesPage;
