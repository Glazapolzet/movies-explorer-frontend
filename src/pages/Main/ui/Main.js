import React from "react";
import styles from './Main.module.css';
import { Promo } from "components/Promo";
import { NavTab } from "components/NavTab";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Promo />
      <NavTab />
    </main>
  )
}