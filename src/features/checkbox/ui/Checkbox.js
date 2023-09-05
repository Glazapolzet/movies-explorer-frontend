import React, {useState} from 'react';
import styles from './Checkbox.module.css';

import checkboxOn from 'assets/images/checkbox.svg';
import checkboxOff from 'assets/images/checkbox_off.svg';

import { Button } from 'shared/ui';

export const Checkbox = ({ atOn, atOff,  className = '' }) => {
  const [isSwitchedOn, setSwitchedOn] = useState(false);

  const checkboxIcon = isSwitchedOn ? checkboxOn : checkboxOff;

  function switchOn() {
    setSwitchedOn(true);
    atOn();
  }

  function switchOff() {
    setSwitchedOn(false);
    atOff();
  }

  return (
    <Button onClick={isSwitchedOn ? switchOff : switchOn}>
      <div
        className={`${styles.icon} ${className}`}
        style={{backgroundImage: `url(${checkboxIcon})`}}
      />
    </Button>
  )
}
