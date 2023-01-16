import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { StackProps } from '../../../types';

export interface StackItemProps extends StackProps {
  fill?: boolean;
}

const UrsaStackItem = ({
  className,
  children
}: StackItemProps): ReactElement => {
  return <div className={`Ursa-StackItem ${className || ''}`}>{children}</div>;
};

export const Item = styled(UrsaStackItem)(
  ({
    vertical = false,
    wrap = true,
    justify = 'start',
    align = 'center',
    spacing = 'normal',
    fill = false
  }) => `
        display: flex;
        flex-direction: ${vertical ? 'column' : 'row'};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        flex-grow: ${fill ? 1 : 0};
        justify-content: ${
          justify === 'evenly'
            ? 'space-evenly'
            : justify === 'between'
            ? 'space-between'
            : justify === 'around'
            ? 'space-around'
            : justify === 'end'
            ? 'flex-end'
            : 'flex-start'
        };
        align-items: ${
          align === 'baseline'
            ? 'baseline'
            : align === 'stretch'
            ? 'stretch'
            : align === 'end'
            ? 'flex-end'
            : align === 'start' || (vertical && !align)
            ? 'flex-start'
            : 'center'
        };
        gap: ${
          spacing === 'extraTight'
            ? '2px'
            : spacing === 'tight'
            ? '5px'
            : spacing === 'loose'
            ? '15px'
            : spacing === 'extraLoose'
            ? '20px'
            : '10px'
        };
    `
);
