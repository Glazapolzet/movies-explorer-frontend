import { moviesApi } from 'shared/api/movies';
import { mainApi } from 'shared/api/main';
import { MOVIES_LOCAL_STORAGE_KEY } from 'shared/config';
import { usePopulate } from 'shared/lib';
import { useClearUserData } from 'features/clear-user-data';

export const useMovies = () => {
  const { populate } = usePopulate();
  const { clearUserData } = useClearUserData();

  const getMoviesFromApi = () => {
    return Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
      .then(([movies, savedMovies]) => populate(movies, savedMovies))
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      });
  };

  function getMoviesFromLocalStorage() {
    const moviesLocal = localStorage.getItem(MOVIES_LOCAL_STORAGE_KEY);

    if (!moviesLocal) {
      return null;
    }

    return JSON.parse(moviesLocal);
  }

  async function getMovies() {
    const moviesFromLocal = getMoviesFromLocalStorage();

    if (moviesFromLocal) {
      return moviesFromLocal;
    }

    try {
      return await getMoviesFromApi();
    } catch(err) {
      console.log(err);
    }
  }

  function saveMovie(movie) {
    return mainApi.saveMovie(movie)
      .then((savedMovie) => savedMovie)
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      });
  }

  function deleteMovie(movieId) {
    return mainApi.deleteMovie(movieId)
      .then((deletedMovie) => deletedMovie)
      .catch((err) => {
        if (err.status !== 401) {
          return err;
        }

        clearUserData();
      })
  }

  return { getMovies, saveMovie, deleteMovie }
}
