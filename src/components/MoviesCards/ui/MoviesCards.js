import React from 'react';
import styles from './MoviesCards.module.css';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { MoreButton } from 'features/more-button';
import { moreButtonText } from '../config/config';
import { Caption, Preloader } from 'shared/ui';
import { useCardsPagination } from 'features/cards-pagination';
import { NOT_FOUND_MESSAGE } from 'shared/config';

export const MoviesCards = ({ cards, onUpdate, isLoading, isCardsEmpty }) => {
  const {
    visibleCards,
    loadMore,
    isCardsEnd
  } = useCardsPagination(cards);

  const isCaptionVisible = !isLoading && isCardsEmpty;
  const isButtonVisible = !isLoading && !isCardsEmpty && !isCardsEnd;
  const isPreloaderVisible = isLoading;
  const isCardsVisible = !isLoading;

  return (
    <section className={styles.moviesCards}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            { isCardsVisible && <MoviesCardList cards={visibleCards} onUpdate={onUpdate} /> }

            { isCaptionVisible && <Caption>{NOT_FOUND_MESSAGE}</Caption> }

            { isButtonVisible && <MoreButton onClick={loadMore}>{moreButtonText}</MoreButton> }

            { isPreloaderVisible && <Preloader/> }
          </div>
        </div>
      </div>
    </section>
  )
}
