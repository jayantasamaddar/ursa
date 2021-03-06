import React, { FC, ReactElement, memo, NamedExoticComponent } from 'react';
import styled from '@emotion/styled';

import { Item } from './components';
import { StackProps } from '../../types';

export interface StackCompoundProps {
  Item: typeof Item;
}

const UnstyledStack: FC<StackProps> = ({
  className,
  children
}): ReactElement => {
  return <div className={`Ursa-Stack ${className || ''}`}>{children}</div>;
};

const StyledStack = styled(UnstyledStack)(
  ({
    vertical = false,
    wrap = true,
    justify = 'start',
    align = 'center',
    spacing = 'normal'
  }) => `
        display: flex;
        flex-direction: ${vertical ? 'column' : 'row'};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        flex: ${justify === 'evenly' ? '1 1 auto' : '0 1 auto'};
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
        width: 100%;
        height: 100%;
    `
);

const Stack: FC<StackProps> & StackCompoundProps = memo(
  (props): ReactElement => {
    return <StyledStack {...props} />;
  }
) as NamedExoticComponent<StackProps> & StackCompoundProps;

Stack.Item = Item;

export { Stack };
