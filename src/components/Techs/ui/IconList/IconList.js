import React from 'react';
import styles from './IconList.module.css';
import { LandingIcon } from 'shared/ui';

export const IconList = ({ icons }) => {
  return (
    <ul className={styles.list}>
      {icons.map((icon, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <LandingIcon text={icon.text} />
        </li>
      ))}
    </ul>
  )
}
