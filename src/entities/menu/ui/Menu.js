import React from 'react';
import styles from './Menu.module.css';
import { MenuNavLinkList } from './MenuNavLinkList/MenuNavLinkList';
import { MenuCrossButton } from './MenuCrossButton/MenuCrossButton';

export const Menu = ({ links, onClose, AccountLinkComponent }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <MenuCrossButton onClick={onClose} />
        </div>

        <div className={styles.container}>
          <MenuNavLinkList links={links} />

          {AccountLinkComponent}
        </div>
      </div>
    </div>
  )
}
