import React, { FC, ReactElement, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Icon, IconProps } from '../../../Icon';
import { Item, NavigationItemProps } from '../Item';

export interface NavigationSectionProps {
  items: NavigationItemProps[];
  className?: string;
  title?: string;
  separator?: boolean;
  action?: {
    label: string;
    icon?: IconProps['source'];
    onClick: (event: MouseEvent<HTMLElement>) => void;
  };
}

const NavigationSection: FC<NavigationSectionProps> = ({
  items,
  className
}): ReactElement => {
  return (
    <ul className={`Ursa-NavigationSection ${className || ''}`}>
      {items.map(({ url, label, icon }, indx) => (
        <Item url={url} label={label} icon={icon} key={indx} />
      ))}
    </ul>
  );
};

export const Section = styled(NavigationSection)(
  ({ theme: { color } }) => `
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 20px;
            height: 100%;
    `
);
