import React from 'react';
import styles from './AboutMe.module.css';
import { sectionTitle, aboutMe } from '../config/config';
import { SectionLayout, SectionTitle } from 'shared/ui';
import { StudentCard } from './StudentCard/StudentCard';
import { StudentInfo } from './StudentInfo/StudentInfo';
import { StudentLink } from './StudentLink/StudentLink';

const { image, info, link } = aboutMe;

export const AboutMe = ({ sectionId }) => {
  return (
    <section className={styles.aboutMe}>
      <SectionLayout>
        <div className={styles.content}>
          <SectionTitle id={sectionId}>
            {sectionTitle}
          </SectionTitle>

          <div className={styles.aboutContent}>
            <div className={styles.container}>
              <div className={styles.textContent}>
                <StudentInfo content={info} />
                <StudentLink
                  href={link.href}
                  target={'_blank'}
                >
                  {link.text}
                </StudentLink>
              </div>

              <StudentCard image={image} />
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  )
}
