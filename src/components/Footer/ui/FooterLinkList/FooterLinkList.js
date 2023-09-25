import React from 'react';
import styles from './FooterLinkList.module.css';
import { FooterLink } from '../FooterLink/FooterLink';

export const FooterLinkList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <FooterLink
            href={link.href}
            target={'_blank'}
          >
            {link.text}
          </FooterLink>
        </li>
      ))}
    </ul>
  )
}
