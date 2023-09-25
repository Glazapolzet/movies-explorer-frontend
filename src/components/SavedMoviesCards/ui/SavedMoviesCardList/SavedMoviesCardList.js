import React from 'react';
import styles from './SavedMoviesCardList.module.css';
import { SavedMoviesCard } from '../SavedMoviesCard/SavedMoviesCard';

export const SavedMoviesCardList = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <SavedMoviesCard card={card} />
        </li>
      ))}
    </ul>
  )
}
