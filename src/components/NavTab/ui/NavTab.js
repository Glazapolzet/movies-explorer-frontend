import React from 'react';
import styles from './NavTab.module.css';
import { links } from '../config/config';

export const NavTab = () => {
  return (
    <nav className={styles.navTab}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <a
              className={styles.link}
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
