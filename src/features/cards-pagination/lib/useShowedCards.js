import { useLocalStorage } from 'shared/lib';
import { SHOWED_CARDS_LOCAL_STORAGE_KEY } from 'shared/config';
import { useCardsResize } from './useCardsResize';

export const useShowedCards = () => {
  const { tryValueFromLocalStorage, setItemToLocalStorage } = useLocalStorage();
  const { resolutionCardsLimit } = useCardsResize();

  function saveNumberOfShowedCards(newNumberOfShowedCards) {
    setItemToLocalStorage(SHOWED_CARDS_LOCAL_STORAGE_KEY, newNumberOfShowedCards);
  }

  function getNumberOfShowedCards() {
    return {
      [`${SHOWED_CARDS_LOCAL_STORAGE_KEY}`]: tryValueFromLocalStorage(SHOWED_CARDS_LOCAL_STORAGE_KEY, resolutionCardsLimit),
    }
  }

  return {saveNumberOfShowedCards, getNumberOfShowedCards}
}
