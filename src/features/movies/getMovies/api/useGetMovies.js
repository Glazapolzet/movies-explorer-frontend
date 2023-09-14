import { moviesApi } from 'shared/api/movies';
import { mainApi } from 'shared/api/main';
import { MOVIES_LOCAL_STORAGE_KEY } from 'shared/config';
import { usePopulate } from 'shared/lib';

export const useGetMovies = () => {
  const { populate } = usePopulate();

  const getMoviesFromApi = () => {
    return Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
      .then(([movies, savedMovies]) => populate(movies, savedMovies))
      .catch((err) => console.log(err));
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

  return { getMovies }
}
