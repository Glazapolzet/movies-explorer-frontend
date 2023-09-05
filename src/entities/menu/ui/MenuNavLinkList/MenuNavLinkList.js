import React from 'react';
import styles from './MenuNavLinkList.module.css';
import { MenuNavLink } from '../MenuNavLink/MenuNavLink';

export const MenuNavLinkList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <MenuNavLink href={link.href}>
            {link.text}
          </MenuNavLink>
        </li>
      ))}
    </ul>
  )
}
