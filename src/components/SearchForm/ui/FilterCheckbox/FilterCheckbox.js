import React from 'react';
import styles from './FilterCheckbox.module.css';
import { Checkbox } from 'features/checkbox';

export const FilterCheckbox = ({ atOn, atOff, caption }) => {
  return (
    <div className={styles.filterCheckbox}>
      <Checkbox
        atOn={atOn}
        atOff={atOff}
      />
      <span className={styles.caption}>
        {caption}
      </span>
    </div>
  )
}
