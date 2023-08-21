import React from "react";
import styles from './Main.module.css';
import { Promo } from "components/Promo";
import { NavTab } from "components/NavTab";
import {SectionTitle} from "../../../shared/ui";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Promo />
      <NavTab />
      <SectionTitle>Testststst</SectionTitle>
    </main>
  )
}