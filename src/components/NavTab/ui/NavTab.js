import React from 'react';
import styles from './NavTab.module.css';
import { NavTabLinkList } from './NavTabLinkList/NavTabLinkList';

export const NavTab = ({ links }) => {
  return (
    <nav className={styles.navTab}>
      <NavTabLinkList links={links} />
    </nav>
  )
}
