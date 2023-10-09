import React from 'react';
import styles from './SavedMoviesCardList.module.css';
import { SavedMoviesCard } from '../SavedMoviesCard/SavedMoviesCard';

export const SavedMoviesCardList = ({ cards, onUpdate }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li
          key={card.movieId}
          className={styles.item}
        >
          <SavedMoviesCard card={card} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  )
}
