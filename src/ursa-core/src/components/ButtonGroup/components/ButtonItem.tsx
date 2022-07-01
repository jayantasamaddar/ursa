import React, { FC, ReactElement } from 'react';

export interface ButtonItemProps {
  button: ReactElement;
}

export const ButtonItem: FC<ButtonItemProps> = ({ button }): ReactElement => {
  return <div className="Ursa-ButtonItem">{button}</div>;
};
