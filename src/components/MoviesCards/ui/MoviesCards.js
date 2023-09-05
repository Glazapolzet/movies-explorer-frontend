import React, { useState } from 'react';
import styles from './MoviesCards.module.css';
import { movieCards } from 'shared/mocks';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { MoreButton } from 'features/more-button';
import { moreButtonText } from '../config/config';
import { Preloader } from 'shared/ui';

export const MoviesCards = () => {
  const [isLoading, setLoading] = useState(false);

  const buttonLayoutHiddenClassname = isLoading
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
