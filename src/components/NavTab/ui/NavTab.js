import React from 'react';
import styles from './NavTab.module.css';

export const NavTab = ({ links }) => {
  return (
    <nav className={styles.navtab}>
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