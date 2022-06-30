import React, { FC, ReactElement, ReactNode } from 'react';
import { Button } from '../Button';

type Spacing = 'extraTight' | 'tight' | 'loose';

export interface ButtonGroupProps {
  /** Determines the space between button group items */
  spacing?: Spacing;
  /** Join buttons as segmented group */
  segmented?: boolean;
  /** Buttons will stretch/shrink to occupy the full width */
  fullWidth?: boolean;
  /** Remove top left and right border radius */
  connectedTop?: boolean;
  /** Button components */
  children?: ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = (): ReactElement => {
  return <div>ButtonGroup</div>;
};

export default ButtonGroup;
