import React from 'react';
import styles from './Footer.module.css';
import { caption, copyrightText } from '../config/config';
import { footerLinks } from 'shared/config';
import { FooterLayout } from './FooterLayout/FooterLayout';
import { FooterCaption } from './FooterCaption/FooterCaption';
import { Stroke } from 'shared/ui';
import { FooterLinkList } from './FooterLinkList/FooterLinkList';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLayout>
        <div className={styles.content}>
          <FooterCaption>
            {caption}
          </FooterCaption>
          <Stroke className={styles.stroke} />

          <div className={styles.container}>
            <p className={styles.copyright}>
              &copy; {copyrightText}
            </p>
            <FooterLinkList links={footerLinks} />
          </div>
        </div>
      </FooterLayout>
    </footer>
  )
}
