import { useEffect, useState } from 'react';
import { useCountVisibleCards } from './lib/useCountVisibleCards';
import { useShowedPages } from './lib/useShowedPages';
import { SHOWED_PAGES_LOCAL_STORAGE_KEY } from 'shared/config';

export const useCardsPagination = (items) => {
  const { numberOfVisibleCards } = useCountVisibleCards();
  const { saveNumberOfShowedPages, getNumberOfShowedPages } = useShowedPages();

  const { [`${SHOWED_PAGES_LOCAL_STORAGE_KEY}`]: localShowedPages } = getNumberOfShowedPages();

  const [limit, setLimit] = useState(numberOfVisibleCards);
  const [isCardsEnd, setIsCardsEnd] = useState(limit >= items.length);
  const [pagesShowed, setPagesShowed] = useState(localShowedPages);

  const [visibleCards, setVisibleCards] = useState(
    items.length === 0
      ? []
      : () => getItemsInRange(pagesShowed * numberOfVisibleCards)
  );

  useEffect(() => {
    saveNumberOfShowedPages(pagesShowed);
  }, [pagesShowed]);

  useEffect(() => {
    setLimit(pagesShowed * numberOfVisibleCards);
  }, [numberOfVisibleCards, pagesShowed]);

  useEffect(() => {
    console.log(limit);
    setVisibleCards(() => getItemsInRange(limit));
    setIsCardsEnd(limit >= items.length);
  }, [limit]);

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
    setPagesShowed((prevPages) => prevPages + 1);
  }

  return {visibleCards, loadMore, isCardsEnd};
}
