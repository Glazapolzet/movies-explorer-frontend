import React, { useState } from 'react';
import styles from './MoviesCards.module.css';
import { movieCards } from 'shared/mocks';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { MoreButton } from 'features/more-button';
import { captionText, moreButtonText } from '../config/config';
import { Caption, Preloader } from 'shared/ui';

export const MoviesCards = () => {
  const [isLoading, setLoading] = useState(false);

  const isCardsEmpty = movieCards.length === 0

  const captionLayoutHiddenClassname = isCardsEmpty
    ? ''
    : styles.captionLayout_hidden;

  const buttonLayoutHiddenClassname = isLoading || isCardsEmpty
    ? styles.buttonLayout_hidden
    : '';

  const preloaderLayoutHiddenClassname = isLoading
    ? ''
    : styles.preloaderLayout_hidden;

  function handleLoad() {
    setLoading(true);

    setTimeout(stopLoad, 500);
  }

  function stopLoad() {
    setLoading(false);
  }

  return (
    <section className={styles.moviesCards}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.container}>
            <MoviesCardList cards={movieCards} />

            <div className={`${styles.captionLayout} ${captionLayoutHiddenClassname}`}>
              <Caption>
                {captionText}
              </Caption>
            </div>

            <div className={`${styles.buttonLayout} ${buttonLayoutHiddenClassname}`}>
              <MoreButton onClick={handleLoad}>
                {moreButtonText}
              </MoreButton>
            </div>

            <div className={`${styles.preloaderLayout} ${preloaderLayoutHiddenClassname}`}>
              <Preloader />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
