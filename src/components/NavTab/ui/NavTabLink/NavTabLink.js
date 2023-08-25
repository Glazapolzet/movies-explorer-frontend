import React from 'react';
import { AnchorLink } from 'shared/ui';
import styles from './NavTabLink.module.css';

export const NavTabLink = ({ href, children }) => {
  return (
    <AnchorLink
      className={styles.link}
      href={href}
    >
      {children}
    </AnchorLink>
  )
}
