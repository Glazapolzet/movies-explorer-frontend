import React from 'react';
import styles from './MoviesCardList.module.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <MoviesCard card={card} />
        </li>
      ))}
    </ul>
  )
}
