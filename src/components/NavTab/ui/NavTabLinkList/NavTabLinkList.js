import React from 'react';
import styles from './NavTabLinkList.module.css';
import { NavTabLink } from '../NavTabLink/NavTabLink';

export const NavTabLinkList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <NavTabLink href={link.href}>
            {link.text}
          </NavTabLink>
        </li>
      ))}
    </ul>
  )
}
