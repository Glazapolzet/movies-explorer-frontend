import React, { useEffect, useState } from 'react';
import styles from './MoviesPage.module.css';
import { SearchForm } from 'components/SearchForm';
import { MoviesCards } from 'components/MoviesCards';
import { useDurationFilter, useSearchFilter } from 'shared/lib';
import { useGetMovies } from 'features/movies';
import { useSearchParameters } from 'features/search';
import {
  HAS_FILTER_LOCAL_STORAGE_KEY,
  MOVIES_LOCAL_STORAGE_KEY,
  SEARCH_QUERY_LOCAL_STORAGE_KEY,
  SEARCHED_MOVIES_LOCAL_STORAGE_KEY
} from 'shared/config';

const MoviesPage = () => {
  const { getSearchParameters, saveSearchParameters } = useSearchParameters();
  const { getMovies } = useGetMovies();
  const { addFilter } = useDurationFilter();
  const { search } = useSearchFilter();

  const searchParameters = getSearchParameters();

  const [isLoading, setLoading] = useState(false);

  const [movies, setMovies] = useState(searchParameters[`${MOVIES_LOCAL_STORAGE_KEY}`]);
  const [searchedMovies, setSearchedMovies] = useState(searchParameters[`${SEARCHED_MOVIES_LOCAL_STORAGE_KEY}`]);
  const [searchQuery, setSearchQuery] = useState(searchParameters[`${SEARCH_QUERY_LOCAL_STORAGE_KEY}`]);
  const [hasFilter, setHasFilter] = useState(searchParameters[`${HAS_FILTER_LOCAL_STORAGE_KEY}`]);

  const [showedMovies, setShowedMovies] = useState([]);
  const [isShowedMoviesEmpty, setShowedMoviesEmpty] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setSearchedMovies(search(searchQuery, movies));
  }, [movies]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setShowedMovies(hasFilter ? addFilter(searchedMovies) : searchedMovies);
  }, [searchedMovies, hasFilter]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setShowedMoviesEmpty(showedMovies.length === 0);
  }, [showedMovies]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    saveSearchParameters(movies, searchedMovies, hasFilter, searchQuery);
  }, [movies, searchedMovies, hasFilter, searchQuery]);

  function handleSearch(moviesQuery) {
    setLoading(true);

    getMovies()
      .then((movies) => {
        setLoading(false);

        setSearchQuery(moviesQuery);
        setMovies(movies);
      })
      .catch((err) => console.log(err));
  }

  function handleFilterOn() {
    setHasFilter(true);
  }

  function handleFilterOff() {
    setHasFilter(false);
  }

  function handleMovieUpdate(updatedMovie) {
    const updatedMovies = movies.map((movie) => movie.movieId === updatedMovie.movieId ? updatedMovie : movie);

    setMovies(updatedMovies);
  }

  return (
    <main className={styles.main}>
      <SearchForm
        onSearch={handleSearch}
        onFilter={handleFilterOn}
        offFilter={handleFilterOff}
        isFilterActive={hasFilter}
      />
      <MoviesCards
        key={showedMovies}
        cards={showedMovies}
        onUpdate={handleMovieUpdate}
        isLoading={isLoading}
        isCardsEmpty={isShowedMoviesEmpty}
      />
    </main>
  )
}

export default MoviesPage;
