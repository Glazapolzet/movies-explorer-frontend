import React from 'react';
import styles from './SavedMoviesCards.module.css';
import { savedMovieCards } from 'shared/mocks';
import { SavedMoviesCardList } from './SavedMoviesCardList/SavedMoviesCardList';

export const SavedMoviesCards = () => {
  return (
    <section className={styles.savedMoviesCards}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            <SavedMoviesCardList cards={savedMovieCards} />
          </div>
        </div>
      </div>
    </section>
  )
}
