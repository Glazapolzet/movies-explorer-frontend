import React from 'react';
import { Tooltip } from 'shared/ui';
import successIcon from 'assets/images/icon_success.svg';

export const SuccessTooltip = ({ caption, isOpen, onClose }) => {
  return (
    <Tooltip
      icon={successIcon}
      caption={caption}
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}
