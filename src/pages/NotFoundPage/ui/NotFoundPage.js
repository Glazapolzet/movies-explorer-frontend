import React from 'react';
import styles from './NotFoundPage.module.css';
import { FullPageError } from 'components/FullPageError';
import { SubLink } from 'shared/ui';
import { error, link } from '../config/config';

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
      <FullPageError
        error={error}
        LinkComponent={
          <SubLink href={link.href}>
            {link.text}
          </SubLink>
        }
      />
    </main>
  )
}

export default NotFoundPage;
