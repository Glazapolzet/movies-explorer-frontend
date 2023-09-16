import { mainApi } from 'shared/api/main';

export const useGetSavedMovies = () => {
  const getSavedMovies = () => {
    return mainApi.getSavedMovies()
      .then((savedMovies) => savedMovies)
      .catch((err) => console.log(err));
  };

  return { getSavedMovies }
}
