import React, { useContext } from 'react';
import styles from './MoviesCard.module.css';
import { Card } from 'entities/card';
import { LikeButton } from 'features/like-button';
import { CurrentUserContext } from 'shared/contexts';
import { convertDurationFormatRU } from 'shared/lib';

export const MoviesCard = ({ card }) => {
  const currentUser = useContext(CurrentUserContext);

  const { nameRU: name, trailerLink, thumbnail, duration, owner } = card;

  const isLiked = owner._id === currentUser._id;

  function handleLike() {
    //TODO: take it from shared/api and place here
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
