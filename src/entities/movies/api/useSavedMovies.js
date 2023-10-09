import { mainApi } from 'shared/api/main';
import { useClearUserData } from 'features/clear-user-data';

export const useSavedMovies = () => {
  const { clearUserData } = useClearUserData();

  const getSavedMovies = () => {
    return mainApi.getSavedMovies()
      .then((savedMovies) => savedMovies)
      .catch((err) => {
        if (err.status !== 401) {
          console.log(err);
          return;
        }

        clearUserData();
      });
  };

  return { getSavedMovies }
}
