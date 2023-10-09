import React from 'react';
import { SubLink } from 'shared/ui';
import styles from './CaptionWithLink.module.css';

export const CaptionWithLink = ({ caption }) => {
  const { text, link, href } = caption;

  return (
    <div className={styles.captionWithLink}>
      <p className={styles.text}>
        {text}
      </p>
      <SubLink href={href}>
        {link}
      </SubLink>
    </div>
  )
}
