import { useLocalStorage } from 'shared/lib';
import {
  HAS_FILTER_LOCAL_STORAGE_KEY,
  MOVIES_LOCAL_STORAGE_KEY,
  SEARCH_QUERY_LOCAL_STORAGE_KEY,
  SEARCHED_MOVIES_LOCAL_STORAGE_KEY
} from 'shared/config';

export const useSearchParameters = () => {
  const { getItemFromLocalStorage, setItemToLocalStorage } = useLocalStorage();

  function setFromLocalStorage(key, defaultValue) {
    const itemFromLocalStorage = getItemFromLocalStorage(key);

    return itemFromLocalStorage === null ? defaultValue : itemFromLocalStorage;
  }

  function saveSearchParameters(newMovies, newSearchedMovies, newHasFilter, newSearchQuery) {
    setItemToLocalStorage(MOVIES_LOCAL_STORAGE_KEY, newMovies);
    setItemToLocalStorage(SEARCHED_MOVIES_LOCAL_STORAGE_KEY, newSearchedMovies);
    setItemToLocalStorage(HAS_FILTER_LOCAL_STORAGE_KEY, newHasFilter);
    setItemToLocalStorage(SEARCH_QUERY_LOCAL_STORAGE_KEY, newSearchQuery);
  }

  function getSearchParameters() {
    return {
      [`${MOVIES_LOCAL_STORAGE_KEY}`]: setFromLocalStorage(MOVIES_LOCAL_STORAGE_KEY, []),
      [`${SEARCHED_MOVIES_LOCAL_STORAGE_KEY}`]: setFromLocalStorage(SEARCHED_MOVIES_LOCAL_STORAGE_KEY, []),
      [`${HAS_FILTER_LOCAL_STORAGE_KEY}`]: setFromLocalStorage(HAS_FILTER_LOCAL_STORAGE_KEY, false),
      [`${SEARCH_QUERY_LOCAL_STORAGE_KEY}`]: setFromLocalStorage(SEARCH_QUERY_LOCAL_STORAGE_KEY, ''),
    }
  }

  return {saveSearchParameters, getSearchParameters}
}
