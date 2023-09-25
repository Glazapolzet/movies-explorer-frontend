import React from 'react';
import styles from './MainPage.module.css';
import { links, sectionIds } from '../config/config';
import { Promo } from 'components/Promo';
import { NavTab } from 'components/NavTab';
import { AboutProject } from 'components/AboutProject';
import { Techs } from 'components/Techs';
import { AboutMe } from 'components/AboutMe';
import { Portfolio } from 'components/Portfolio';

const { aboutProject, techs, aboutMe } = sectionIds;

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Promo />
        <NavTab links={links} />

        <AboutProject sectionId={aboutProject} />
        <Techs sectionId={techs} />
        <AboutMe sectionId={aboutMe} />

        <Portfolio />
      </div>
    </main>
  )
}

export default MainPage;
