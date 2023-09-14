import React, { useEffect, useState } from 'react';
import styles from './SavedMoviesPage.module.css';
import { SearchForm } from 'components/SearchForm';
import { SavedMoviesCards } from 'components/SavedMoviesCards';
import { useDurationFilter, useSearchFilter } from 'shared/lib';
import { useGetSavedMovies } from 'features/movies';

const SavedMoviesPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [moviesCards, setMoviesCards] = useState([]);
  const [isCardsEmpty, setCardsEmpty] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);

  const { getSavedMovies } = useGetSavedMovies();
  const { addFilter, removeFilter } = useDurationFilter();
  const { search: searchMovies } = useSearchFilter();

  useEffect(() => {
    setLoading(true);

    getSavedMovies()
      .then((savedMovies) => {
        setLoading(false);
        setMoviesCards(savedMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCardsEmpty(moviesCards.length === 0);
  }, [moviesCards]);

  function handleSearch(searchQuery) {
    const searchedMovies = searchMovies(searchQuery, moviesCards);

    setMoviesCards(hasFilter ? addFilter(searchedMovies) : searchedMovies);
  }

  function handleFilterOn() {
    setHasFilter(true);
    setMoviesCards(addFilter(moviesCards));
  }

  function handleFilterOff() {
    setHasFilter(false);
    setMoviesCards(removeFilter());
  }

  return (
    <main className={styles.main}>
      <SearchForm
        onSearch={handleSearch}
        onFilter={handleFilterOn}
        offFilter={handleFilterOff}
      />
      <SavedMoviesCards
        key={moviesCards}
        cards={moviesCards}
        isLoading={isLoading}
        isCardsEmpty={isCardsEmpty}
      />
    </main>
  )
}

export default SavedMoviesPage;
