import React from 'react';
import styles from './AccountLinkDefault.module.css';
import { Link } from 'shared/ui';
import profileIcon from 'assets/images/icon_profile.svg';

export const AccountLinkDefault = ({ href }) => {
  return (
    <Link
      href={href}
    >
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${profileIcon})`}}
      />
    </Link>
  )
}
