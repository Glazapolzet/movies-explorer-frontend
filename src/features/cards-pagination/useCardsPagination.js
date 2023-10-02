import { useEffect, useState } from 'react';
import { useCardsResize } from './lib/useCardsResize';
import { useShowedCards } from './lib/useShowedCards';
import { SHOWED_CARDS_LOCAL_STORAGE_KEY } from 'shared/config';

export const useCardsPagination = (items) => {
  const { resolutionCardsLimit, loadCardsLimit } = useCardsResize();
  const { saveNumberOfShowedCards, getNumberOfShowedCards } = useShowedCards();

  const { [`${SHOWED_CARDS_LOCAL_STORAGE_KEY}`]: localShowedCards} = getNumberOfShowedCards();

  const [showedCards, setShowedCards] = useState(localShowedCards);
  const [isCardsEnd, setIsCardsEnd] = useState(localShowedCards >= items.length);

  const [visibleCards, setVisibleCards] = useState(
    items.length === 0
      ? []
      : () => getItemsInRange(localShowedCards)
  );

  useEffect(() => {
    saveNumberOfShowedCards(showedCards);
  }, [showedCards]);

  useEffect(() => {
    setVisibleCards(() => getItemsInRange(showedCards));
    setIsCardsEnd(showedCards >= items.length);
  }, [showedCards]);

  function getItemsInRange(range) {
    let tempItems = [];

    for (let i = 0; i < range; i++) {
      if (!items[i]) {
        break;
      }

      tempItems.push(items[i]);
    }

    return tempItems;
  }

  const loadMore = () => {
    setShowedCards((prevShowedCards) => prevShowedCards + loadCardsLimit);
  }

  const resetShowedCards = () => {
    setShowedCards(resolutionCardsLimit);
  }

  return {visibleCards, loadMore, isCardsEnd, resetShowedCards};
}
