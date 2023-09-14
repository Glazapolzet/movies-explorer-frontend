import { useState } from 'react';

export const usePagination = (items, itemsLimit) => {
  const [limit, setLimit] = useState(itemsLimit);
  const [isEnd, setEnd] = useState(limit >= items.length);

  const [visibleItems, setVisibleItems] = useState(items.length === 0 ? [] : () => getItemsInRange(itemsLimit));

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
    const newLimit = limit + itemsLimit;

    setLimit(newLimit);

    setVisibleItems(() => getItemsInRange(newLimit));
    setEnd(newLimit >= items.length);
  }

  return {visibleItems, loadMore, isEnd};
}
