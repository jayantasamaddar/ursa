import styled from '@emotion/styled';
import React, { ReactElement, ReactNode, Children } from 'react';
import { ButtonItem } from './components';

type Spacing = 'extraTight' | 'tight' | 'loose';
type Justify = 'start' | 'end' | 'center' | 'around' | 'evenly' | 'between';

export interface ButtonGroupProps {
  /** Determines the space between button group items */
  spacing?: Spacing;
  /** Determines how the button group items are justified */
  justify?: Justify;
  /** Join buttons as segmented group */
  segmented?: boolean;
  /** Buttons will stretch/shrink to occupy the full width */
  fullWidth?: boolean;
  /** Remove top left and right border radius */
  connectedTop?: boolean;
  /** Remove bottom left and right border radius */
  connectedBottom?: boolean;
  /** Button components */
  children?: ReactNode;
  /** Classes */
  className?: string;
}

const UrsaButtonGroup = ({
  children,
  className
}: ButtonGroupProps): ReactElement => {
  const childrenArray = Children.toArray(children);
  const content = childrenArray.map((child, index) => (
    <ButtonItem button={child as ReactElement} key={index} />
  ));

  return (
    <div className={`Ursa-ButtonGroup ${className || ''}`} role="group">
      {content}
    </div>
  );
};

export const ButtonGroup = styled(UrsaButtonGroup)(
  ({
    spacing,
    justify,
    segmented,
    fullWidth,
    connectedTop,
    connectedBottom
  }) => `
    display: flex;
    flex-wrap: ${segmented ? 'nowrap' : 'wrap'};
    flex-grow: ${fullWidth ? '1' : '0'};
    min-width: ${fullWidth ? '100%' : 'auto'};
    align-items: stretch;
    
    .Ursa-ButtonContainer {
      height: 100%;
    }

    ${
      segmented
        ? `.Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > button, 
        .Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > a {}
      
      .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)
        > .Ursa-ButtonContainer
        > button, .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)
        > .Ursa-ButtonContainer
        > a {
        border-radius: unset;
        margin-right: -1px;
      }

      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > button, 
      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > a {
        margin-left: ${fullWidth ? '-1px' : '0'};
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
        border-top-right-radius: ${connectedTop ? 'unset' : '4px'};
        border-bottom-right-radius: ${connectedBottom ? 'unset' : '4px'};
      }

      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > button, 
      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > a {
        margin-right: -1px;
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        border-top-left-radius: ${connectedTop ? 'unset' : '4px'};
        border-bottom-left-radius: ${connectedBottom ? 'unset' : '4px'};
      }
      `
        : `
      justify-content: ${
        justify === 'end'
          ? 'flex-end'
          : justify === 'center'
          ? 'center'
          : justify === 'evenly'
          ? 'space-evenly'
          : justify === 'between'
          ? 'space-between'
          : justify === 'around'
          ? 'around'
          : 'flex-start'
      };
      & .Ursa-ButtonItem:not(:first-of-type) {
        margin-left: ${
          spacing === 'extraTight'
            ? '0.3125rem'
            : spacing === 'loose'
            ? '1.25rem'
            : '0.625rem'
        };
      }
      `
    }
    
    ${
      fullWidth &&
      `
      .Ursa-ButtonItem {
        flex: 1 1 auto;

        button {
          width: 100%;
        }

        &:hover {
          z-index: 5;
        }
      }
    `
    }
  }
  `
);
