import React, { ReactNode } from 'react';

export interface FormLayoutItemProps {
  children?: ReactNode;
}

export const Item = ({ children }: FormLayoutItemProps) => {
  return children ? (
    <div className="Ursa-FormLayoutGroupItem">{children}</div>
  ) : null;
};
