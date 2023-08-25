import React from 'react';
import styles from './PortfolioLinkList.module.css';
import { PortfolioLink } from '../PortfolioLink/PortfolioLink';
import { Stroke } from 'shared/ui/Stroke/Stroke';

export const PortfolioLinkList = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <PortfolioLink href={link.href}>
            {link.text}
          </PortfolioLink>
          <Stroke className={styles.stroke} />
        </li>
      ))}
    </ul>
  )
}
