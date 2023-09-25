import React from 'react';
import styles from './MenuNavLink.module.css';
import { NavLink } from 'react-router-dom';

export const MenuNavLink = ({ href, children }) => {
  return (
    <NavLink
      className={({isActive}) =>
        isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`
      }
      to={href}
    >
      {children}
    </NavLink>
  )
}
