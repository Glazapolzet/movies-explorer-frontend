import { useWindowSize } from 'shared/lib';
import { useEffect, useState } from 'react';
import {cardsLoad, cardsVisible, screenWidth} from '../config/config';

export const useCardsResize = () => {
  const { windowWidth } = useWindowSize();

  const [resolutionCardsLimit, setResolutionCardsLimit] = useState(getNumberOfVisibleCards(windowWidth));
  const [loadCardsLimit, setLoadCardsLimit] = useState(getNumberOfLoadCards(windowWidth));

  function getNumberOfVisibleCards(width) {
    return width < screenWidth.desktop
      ? width < screenWidth.tablet
        ? cardsVisible.mobile
        : cardsVisible.tablet
      : cardsVisible.desktop
  }

  function getNumberOfLoadCards(width) {
    return width < screenWidth.desktop
      ? width < screenWidth.tablet
        ? cardsLoad.mobile
        : cardsLoad.tablet
      : cardsLoad.desktop
  }

  useEffect(() => {
    setResolutionCardsLimit(getNumberOfVisibleCards(windowWidth));
    setLoadCardsLimit(getNumberOfLoadCards(windowWidth));
  }, [windowWidth]);

  return {resolutionCardsLimit, loadCardsLimit}
}
