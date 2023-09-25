import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

export const Link = ({ href, children, className = '', ...props }) => {
  return (
    <RouterLink
      className={`${styles.link} ${className}`}
      to={href}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
