import React from 'react';
import styles from './AboutProject.module.css';
import { descriptionContent, barContent, sectionTitle } from '../config/config';
import { SectionLayout, SectionTitle } from 'shared/ui';
import { BriefDescription } from './BriefDescription/BriefDescription';
import { StageBar } from './StageBar/StageBar';

const { aboutStages, aboutDeadline } = descriptionContent;

export const AboutProject = ({ sectionId }) => {
  return (
    <section className={styles.aboutProject}>
      <SectionLayout>
        <div className={styles.content}>
          <SectionTitle id={sectionId}>
            {sectionTitle}
          </SectionTitle>

          <div className={styles.textContent}>
            <div className={styles.container}>
              <BriefDescription content={aboutStages} />
              <BriefDescription content={aboutDeadline} />
            </div>
          </div>

          <div className={styles.barContent}>
            <StageBar content={barContent} />
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}
