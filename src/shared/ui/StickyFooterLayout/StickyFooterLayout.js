import React from 'react';
import styles from './StickyFooterLayout.module.css';
import { Outlet } from 'react-router-dom';

export const StickyFooterLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}
