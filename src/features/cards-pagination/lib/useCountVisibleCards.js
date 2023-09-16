import { useWindowSize } from 'shared/lib';
import { useEffect, useState } from 'react';
import { cardsVisible, screenWidth } from '../config/config';

export const useCountVisibleCards = () => {
  const { windowWidth } = useWindowSize();

  const [numberOfVisibleCards, setNumberOfVisibleCards] = useState(getNumberOfVisibleCards(windowWidth));

  function getNumberOfVisibleCards(width) {
    return width < screenWidth.desktop
      ? width < screenWidth.tablet
        ? cardsVisible.mobile
        : cardsVisible.tablet
      : cardsVisible.desktop
  }

  useEffect(() => {
    setNumberOfVisibleCards(getNumberOfVisibleCards(windowWidth));
  }, [windowWidth]);

  return {numberOfVisibleCards}
}
