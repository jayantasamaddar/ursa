import React, { ReactElement } from 'react';

export interface ButtonItemProps {
  button: ReactElement;
}

export const ButtonItem = ({ button }: ButtonItemProps): ReactElement => {
  return <div className="Ursa-ButtonItem">{button}</div>;
};
