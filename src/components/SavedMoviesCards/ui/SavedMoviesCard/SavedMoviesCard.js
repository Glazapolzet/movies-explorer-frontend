import React from 'react';
import styles from './SavedMoviesCard.module.css';
import { Card } from 'entities/card';
import { convertDurationFormatRU, useChangeProperty } from 'shared/lib';
import { SavedMoviesCardCrossButton } from '../SavedMoviesCardCrossButton/SavedMoviesCardCrossButton';
import { mainApi } from 'shared/api/main';

export const SavedMoviesCard = ({ card, onUpdate }) => {
  const { nameRU: name, trailerLink, thumbnail, duration, movieId } = card;

  const { removeProperty } = useChangeProperty();

  function handleFilmRemove() {
    mainApi.deleteMovie(movieId)
      .then(() => {
        onUpdate(removeProperty(card, 'owner'));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.moviesCard}>
      <Card
        link={trailerLink}
        image={thumbnail}
        title={name}
        caption={convertDurationFormatRU(duration)}
        ButtonComponent={<SavedMoviesCardCrossButton onClick={handleFilmRemove} />}
      />
    </div>
  )
}
