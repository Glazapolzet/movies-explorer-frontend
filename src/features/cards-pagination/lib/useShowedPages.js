import { useLocalStorage } from 'shared/lib';
import { SHOWED_PAGES_LOCAL_STORAGE_KEY } from 'shared/config';

export const useShowedPages = () => {
  const { tryValueFromLocalStorage, setItemToLocalStorage } = useLocalStorage();

  function saveNumberOfShowedPages(newNumberOfShowedPages) {
    setItemToLocalStorage(SHOWED_PAGES_LOCAL_STORAGE_KEY, newNumberOfShowedPages);
  }

  function getNumberOfShowedPages() {
    return {
      [`${SHOWED_PAGES_LOCAL_STORAGE_KEY}`]: tryValueFromLocalStorage(SHOWED_PAGES_LOCAL_STORAGE_KEY, 1),
    }
  }

  return {saveNumberOfShowedPages, getNumberOfShowedPages}
}
