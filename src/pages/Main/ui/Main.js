import React from 'react';
import styles from './Main.module.css';
import { Promo } from 'components/Promo';
import { NavTab } from 'components/NavTab';
import { AboutProject } from '../../../components/AboutProject';
import { links, sectionIds } from '../config/config';

const { aboutProject, techs, aboutMe } = sectionIds;

export const Main = () => {
  return (
    <main className={styles.main}>
      <Promo />
      <NavTab links={links} />
      <AboutProject sectionId={aboutProject} />
    </main>
  )
}