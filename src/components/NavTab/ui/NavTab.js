import React from 'react';
import styles from './NavTab.module.css';
import { NavList } from './NavList/NavList';

export const NavTab = ({ links }) => {
  return (
    <nav className={styles.navTab}>
      <NavList links={links} />
    </nav>
  )
}
