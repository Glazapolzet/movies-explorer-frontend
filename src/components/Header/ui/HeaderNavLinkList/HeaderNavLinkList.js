import React from 'react';
import styles from './HeaderNavLinkList.module.css';
import { HeaderNavLink } from '../HeaderNavLink/HeaderNavLink';

export const HeaderNavLinkList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <HeaderNavLink href={link.href}>
            {link.text}
          </HeaderNavLink>
        </li>
      ))}
    </ul>
  )
}
