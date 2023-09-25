import React from 'react';
import styles from './AccountLinkPromo.module.css';
import { Link } from 'shared/ui';
import promoProfileIcon from 'assets/images/icon_profile_promo.svg';

export const AccountLinkPromo = ({ href }) => {
  return (
    <Link
      href={href}
    >
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${promoProfileIcon})`}}
      />
    </Link>
  )
}
