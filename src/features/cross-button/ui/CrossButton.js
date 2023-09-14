import React from 'react';
import { Button, CrossIcon } from 'shared/ui';

export const CrossButton = ({ onClick, iconUrl, className = '' }) => {
  return (
    <Button onClick={onClick}>
      <CrossIcon
        className={className}
        url={iconUrl}
      />
    </Button>
  )
}
