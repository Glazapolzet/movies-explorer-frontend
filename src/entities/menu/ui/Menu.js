import React from 'react';
import styles from './Menu.module.css';
import { CrossButton } from 'features/cross-button';
import { MenuNavLinkList } from './MenuNavLinkList/MenuNavLinkList';

export const Menu = ({ links, onClose, AccountLinkComponent }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <CrossButton onClick={onClose} />
        </div>

        <div className={styles.container}>
          <MenuNavLinkList links={links} />

          {AccountLinkComponent}
        </div>
      </div>
    </div>
  )
}
