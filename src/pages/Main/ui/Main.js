import React from "react";
import styles from './Main.module.css';
import { Promo } from "components/Promo";
import { NavTab } from "components/NavTab";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Promo/>
      <NavTab
        links={[
          { text: "О проекте", href: "#aboutProject" },
          { text: "Технологии", href: "#techs" },
          { text: "Студент", href: "#aboutMe" },
        ]}
      />
    </main>
  )
}