import React from 'react';
import navIcon from 'assets/images/icon_navigate.svg';
import { LinkWithIcon } from 'shared/ui';

export const PortfolioLink = ({ href, children }) => {
  return (
    <LinkWithIcon
      href={href}
      icon={navIcon}
      target={'_blank'}
    >
      {children}
    </LinkWithIcon>
  )
}
