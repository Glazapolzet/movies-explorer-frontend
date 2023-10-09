import React, { useState } from 'react';
import styles from './MoviesCard.module.css';
import { Card } from 'entities/card';
import { LikeButton } from 'features/like-button';
import { convertDurationFormatRU, useChangeObjectProperty } from 'shared/lib';
import { useMovies } from 'entities/movies';

export const MoviesCard = ({ card, onUpdate }) => {
  const { nameRU: name, trailerLink, thumbnail, duration } = card;

  const [isLiked, setIsLiked] = useState(Object.hasOwn(card, 'owner'));

  const { addProperty, removeProperty } = useChangeObjectProperty();
  const { saveMovie, deleteMovie } = useMovies();

  function setLike(movieCard) {
    saveMovie(movieCard)
      .then(({ owner }) => {
        setIsLiked(true);
        onUpdate(addProperty(movieCard, 'owner', owner));
      })
      .catch((err) => console.log(err));
  }

  function removeLike(movieCard) {
    deleteMovie(movieCard.movieId)
      .then(() => {
        setIsLiked(false);
        onUpdate(removeProperty(movieCard, 'owner'));
      })
      .catch((err) => console.log(err));
  }

  function handleLike() {
    return isLiked ? removeLike(card) : setLike(card);
  }

  return (
    <div className={styles.moviesCard}>
      <Card
        link={trailerLink}
        image={thumbnail}
        title={name}
        caption={convertDurationFormatRU(duration)}
        ButtonComponent={<LikeButton isActive={isLiked} onLikeClick={handleLike} />}
      />
    </div>
  )
}
