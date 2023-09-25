import React from 'react';
import styles from './MainLink.module.css';
import logo from 'assets/images/logo_main.svg'
import { NavLink } from 'react-router-dom';

export const MainLink = ({ href }) => {
  return (
    <NavLink
      className={styles.link}
      to={href}
    >
      <div
        className={styles.logo}
        style={{backgroundImage: `url(${logo})`}}
      />
    </NavLink>
  )
}
