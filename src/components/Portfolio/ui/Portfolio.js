import React from 'react';
import styles from './Portfolio.module.css';
import { SectionLayout } from 'shared/ui';
import { PortfolioLinkList } from './PortfolioLinkList/PortfolioLinkList';
import { caption, links } from '../config/config';
import { PortfolioCaption } from './PortfolioCaption/PortfolioCaption';

export const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <SectionLayout>
        <div className={styles.container}>
          <PortfolioCaption>
            {caption}
          </PortfolioCaption>
          <PortfolioLinkList links={links} />
        </div>
      </SectionLayout>
    </section>
  )
}
