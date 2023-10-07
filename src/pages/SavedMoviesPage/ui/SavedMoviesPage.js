import React, { useEffect, useState } from 'react';
import styles from './SavedMoviesPage.module.css';
import { SearchForm } from 'components/SearchForm';
import { SavedMoviesCards } from 'components/SavedMoviesCards';
import { useChangeObjectProperty, useDurationFilter, useSearchFilter } from 'shared/lib';
import { useGetSavedMovies } from 'features/movies';
import { useSearchParameters } from 'features/search';
import {
  HAS_FILTER_LOCAL_STORAGE_KEY,
  MOVIES_LOCAL_STORAGE_KEY,
  SEARCH_QUERY_LOCAL_STORAGE_KEY,
} from 'shared/config';

const SavedMoviesPage = () => {
  const [isLoading, setLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasFilter, setHasFilter] = useState(false);

  const [showedMovies, setShowedMovies] = useState([]);
  const [isShowedMoviesEmpty, setShowedMoviesEmpty] = useState(false);

  const { getSearchParameters, saveSearchParameters } = useSearchParameters();
  const { removeProperty } = useChangeObjectProperty();
  const { getSavedMovies } = useGetSavedMovies();
  const { addFilter } = useDurationFilter();
  const { search } = useSearchFilter();

  useEffect(() => {
    setLoading(true);

    getSavedMovies()
      .then((savedMovies) => {
        setLoading(false);
        setMovies(savedMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setSearchedMovies(search(searchQuery, movies));
  }, [movies, searchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      setShowedMovies(hasFilter ? addFilter(movies) : movies);
      return;
    }
    setShowedMovies(hasFilter ? addFilter(searchedMovies) : searchedMovies);
  }, [movies, searchedMovies, hasFilter]);

  useEffect(() => {
    setShowedMoviesEmpty(showedMovies.length === 0);
  }, [showedMovies]);

  function handleSearch(moviesQuery) {
    setSearchQuery(moviesQuery);
  }

  function handleFilterOn() {
    setHasFilter(true);
  }

  function handleFilterOff() {
    setHasFilter(false);
  }

  function handleMovieUpdate(updatedMovie) {
    const filteredMovies = movies.filter((movie) => movie.movieId !== updatedMovie.movieId);

    setMovies(filteredMovies);

    const {
      [`${MOVIES_LOCAL_STORAGE_KEY}`]: localMovies,
      [`${HAS_FILTER_LOCAL_STORAGE_KEY}`]: localHasFilter,
      [`${SEARCH_QUERY_LOCAL_STORAGE_KEY}`]: localSearchQuery,
    } = getSearchParameters();

    if (localMovies.length === 0) {
      return;
    }

    removeProperty(updatedMovie, '__v');
    removeProperty(updatedMovie, '_id');

    const updatedLocalMovies = localMovies.map((localMovie) => {
      return localMovie.movieId === updatedMovie.movieId ? updatedMovie : localMovie;
    });
    const updatedLocalSearchedMovies = search(localSearchQuery, updatedLocalMovies);

    saveSearchParameters(updatedLocalMovies, updatedLocalSearchedMovies, localHasFilter, localSearchQuery);
  }

  return (
    <main className={styles.main}>
      <SearchForm
        onSearch={handleSearch}
        onFilter={handleFilterOn}
        offFilter={handleFilterOff}
        isFilterActive={hasFilter}
        initialValue={searchQuery}
      />
      <SavedMoviesCards
        key={showedMovies}
        cards={showedMovies}
        onUpdate={handleMovieUpdate}
        isLoading={isLoading}
        isCardsEmpty={isShowedMoviesEmpty}
      />
    </main>
  )
}

export default SavedMoviesPage;
