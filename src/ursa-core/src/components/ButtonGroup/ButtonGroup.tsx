import styled from '@emotion/styled';
import React, { FC, ReactElement, ReactNode, Children } from 'react';
import { Button } from '../Button';
import { ButtonItem } from './components';

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
  /** Classes */
  className?: string;
}

const UrsaButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className
}): ReactElement => {
  const childrenArray = Children.toArray(children);
  const content = childrenArray.map((child, index) => (
    <ButtonItem button={child as ReactElement} key={index} />
  ));

  return <div className={`Ursa-ButtonGroup ${className || ''}`}>{content}</div>;
};

export const ButtonGroup = styled(UrsaButtonGroup)(
  ({ theme, spacing, segmented, fullWidth, connectedTop }) => `
    display: flex;
    flex-wrap: ${segmented ? 'nowrap' : 'wrap'};
    flex-grow: ${fullWidth ? '1' : '0'};
    min-width: ${fullWidth ? '100%' : 'auto'};
    gap: ${segmented ? '0' : '10px'};
    align-items: center; 

    ${
      segmented &&
      `.Ursa-ButtonItem:nth-of-type(n+1)
        > .Ursa-ButtonContainer
        > button {}
      
      .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)
        > .Ursa-ButtonContainer
        > button {
        border-radius: unset;
      }

      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > button {
        margin-left: -1px;
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
        ${connectedTop && `border-top-right-radius: unset`}
      }

      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > button {
        margin-right: -1px;
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        ${connectedTop && `border-top-left-radius: unset`}
      }`
    }
  }
  `
);
