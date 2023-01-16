import React, { ReactElement, ReactNode } from 'react';

export interface PopoverSectionProps {
  children?: ReactNode;
}

export const PopoverSection = ({
  children
}: PopoverSectionProps): ReactElement => {
  return <div className="Ursa-PopoverSection">{children}</div>;
};
