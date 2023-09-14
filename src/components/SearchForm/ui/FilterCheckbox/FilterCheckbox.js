import React from 'react';
import styles from './FilterCheckbox.module.css';
import { Checkbox } from 'features/checkbox';

export const FilterCheckbox = ({ atOn, atOff, isActive, caption }) => {
  return (
    <div className={styles.filterCheckbox}>
      <Checkbox
        atOn={atOn}
        atOff={atOff}
        isActive={isActive}
      />
      <span className={styles.caption}>
        {caption}
      </span>
    </div>
  )
}
