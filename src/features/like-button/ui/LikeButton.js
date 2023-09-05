import React from 'react';
import styles from './LikeButton.module.css';

import likeIconUnactive from 'assets/images/icon_like.svg';
import likeIconActive from 'assets/images/icon_like_active.svg';

import { Button } from 'shared/ui';

export const LikeButton = ({ isActive, onLikeClick }) => {
  const likeIcon = isActive ? likeIconActive : likeIconUnactive;

  return (
    <Button onClick={onLikeClick}>
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${likeIcon})`}}
      />
    </Button>
  )
}
