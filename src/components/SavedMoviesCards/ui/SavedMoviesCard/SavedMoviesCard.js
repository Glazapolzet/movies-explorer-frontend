import React from 'react';
import styles from './SavedMoviesCard.module.css';
import { Card } from 'entities/card';
import { convertDurationFormatRU, useChangeObjectProperty } from 'shared/lib';
import { SavedMoviesCardCrossButton } from '../SavedMoviesCardCrossButton/SavedMoviesCardCrossButton';
import { useMovies } from 'entities/movies';

export const SavedMoviesCard = ({ card, onUpdate }) => {
  const { nameRU: name, trailerLink, thumbnail, duration } = card;

  const { removeProperty } = useChangeObjectProperty();
  const { deleteMovie } = useMovies();

  function handleFilmRemove(movieCard) {
    deleteMovie(movieCard.movieId)
      .then(() => {
        onUpdate(removeProperty(movieCard, 'owner'));
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
        ButtonComponent={
          <SavedMoviesCardCrossButton
            onClick={() => handleFilmRemove(card)}
          />
        }
      />
    </div>
  )
}
