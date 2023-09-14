import React, { useState } from 'react';
import styles from './MoviesCard.module.css';
import { Card } from 'entities/card';
import { LikeButton } from 'features/like-button';
import { convertDurationFormatRU, useChangeProperty } from 'shared/lib';
import { mainApi } from 'shared/api/main';

export const MoviesCard = ({ card, onUpdate }) => {
  const { nameRU: name, trailerLink, thumbnail, duration, movieId } = card;

  const [isLiked, setIsLiked] = useState(Object.hasOwn(card, 'owner'));

  const { addProperty, removeProperty } = useChangeProperty();

  function setLike() {
    mainApi.saveMovie(card)
      .then(({ owner }) => {
        setIsLiked(true);
        onUpdate(addProperty(card, 'owner', owner));
      })
      .catch((err) => console.log(err));
  }

  function removeLike() {
    mainApi.deleteMovie(movieId)
      .then(() => {
        setIsLiked(false);
        onUpdate(removeProperty(card, 'owner'));
      })
      .catch((err) => console.log(err));
  }

  function handleLike() {
    return isLiked ? removeLike() : setLike();
  }

  return (
    <div className={styles.moviesCard} id={movieId}>
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
