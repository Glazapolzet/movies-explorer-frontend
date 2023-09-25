import React from 'react';
import styles from './Auth.module.css';
import { MainLink } from 'features/main-link';
import { mainLink } from 'shared/config';
import { AuthTitle } from 'shared/ui';

export const Auth = ({ title, formComponent, captionComponent}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.mainLinkContent}>
          <MainLink href={mainLink.href} />
        </div>

        <div className={styles.titleContent}>
          <AuthTitle>
            {title}
          </AuthTitle>
        </div>

        <div className={styles.formContent}>
          {formComponent}
        </div>

        <div className={styles.captionContent}>
          {captionComponent}
        </div>
      </div>
    </div>
  )
}
