import React from "react";
import { AuthLink } from '../AuthLink/AuthLink';
import styles from './CaptionWithLink.module.css';

export const CaptionWithLink = ({ captionText, linkText, linkTo }) => {
  return (
    <div className={styles.caption}>
      <p className={styles.text}>
        {captionText}
      </p>
      <AuthLink to={linkTo}>
        {linkText}
      </AuthLink>
    </div>
  )
}
