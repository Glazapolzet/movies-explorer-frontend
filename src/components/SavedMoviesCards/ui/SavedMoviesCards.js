import React from 'react';
import styles from './SavedMoviesCards.module.css';
import { SavedMoviesCardList } from './SavedMoviesCardList/SavedMoviesCardList';
import { Caption, Preloader } from 'shared/ui';
import { NOT_FOUND_MESSAGE } from 'shared/config';

export const SavedMoviesCards = ({ cards, isLoading, isCardsEmpty }) => {
  const isCaptionVisible = !isLoading && isCardsEmpty;
  const isPreloaderVisible = isLoading;
  const isCardsVisible = !isLoading;

  return (
    <section className={styles.savedMoviesCards}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            { isCardsVisible && <SavedMoviesCardList cards={cards} /> }

            { isCaptionVisible && <Caption>{NOT_FOUND_MESSAGE}</Caption> }

            { isPreloaderVisible && <Preloader/> }
          </div>
        </div>
      </div>
    </section>
  )
}
