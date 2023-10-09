import React from 'react';
import styles from './LikeButton.module.css';

import likeIconInactive from 'assets/images/icon_like.svg';
import likeIconActive from 'assets/images/icon_like_active.svg';

import { Button } from 'shared/ui';

export const LikeButton = ({ isActive, onLikeClick }) => {
  const likeIcon = isActive ? likeIconActive : likeIconInactive;

  return (
    <Button onClick={onLikeClick}>
      <div
        className={styles.icon}
        style={{backgroundImage: `url(${likeIcon})`}}
      />
    </Button>
  )
}
