import React from 'react';
import styles from './Techs.module.css';
import { sectionTitle, title, description, iconsContent } from '../config/config';
import { SectionLayout, SectionTitle } from 'shared/ui';
import { IconList } from './IconList/IconList';
import { Title } from 'shared/ui/Title/Title';

export const Techs = ({ sectionId }) => {
  return (
    <section className={styles.techs}>
      <SectionLayout>
        <div className={styles.content}>
          <SectionTitle id={sectionId}>
            {sectionTitle}
          </SectionTitle>

          <div className={styles.textContent}>
            <div className={styles.container}>
              <Title className={styles.title}>
                {title}
              </Title>
              <p className={styles.description}>
                {description}
              </p>
            </div>
          </div>

          <div className={styles.iconContent}>
            <IconList icons={iconsContent} />
          </div>

        </div>
      </SectionLayout>
    </section>
  )
}
