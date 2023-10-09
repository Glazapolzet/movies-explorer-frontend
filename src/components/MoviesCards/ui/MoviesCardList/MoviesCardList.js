import React from 'react';
import styles from './MoviesCardList.module.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({ cards, onUpdate }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li
          key={card.movieId}
          className={styles.item}
        >
          <MoviesCard card={card} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  )
}
