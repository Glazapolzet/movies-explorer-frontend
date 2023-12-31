import React from 'react';
import styles from './SavedMoviesCard.module.css';
import { Card } from 'entities/card';
import { convertDurationFormatRU } from 'shared/lib';
import { CrossButton } from 'features/cross-button';

export const SavedMoviesCard = ({ card }) => {
  const { nameRU: name, trailerLink, thumbnail, duration } = card;

  function handleFilmRemove() {
    //TODO: take it from shared/api and place here
  }

  return (
    <div className={styles.moviesCard}>
      <Card
        link={trailerLink}
        image={thumbnail}
        title={name}
        caption={convertDurationFormatRU(duration)}
        ButtonComponent={<CrossButton onClick={handleFilmRemove} className={styles.icon} />}
      />
    </div>
  )
}
