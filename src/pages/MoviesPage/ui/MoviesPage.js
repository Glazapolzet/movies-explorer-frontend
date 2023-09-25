import React from 'react';
import styles from './MoviesPage.module.css';
import { SearchForm } from 'components/SearchForm';
import { MoviesCards } from 'components/MoviesCards';

const MoviesPage = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <MoviesCards />
    </main>
  )
}

export default MoviesPage;
