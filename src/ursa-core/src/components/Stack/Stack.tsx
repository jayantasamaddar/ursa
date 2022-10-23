import React, { ReactElement, memo, NamedExoticComponent } from 'react';
import styled from '@emotion/styled';
import { Item } from './components';
import { StackProps } from '../../types';
import { useTestId } from '../../utilities';

const UnstyledStack = ({ className, children }: StackProps): ReactElement => {
  const testid = useTestId('test-stack');
  return (
    <div className={`Ursa-Stack ${className || ''}`} {...testid}>
      {children}
    </div>
  );
};

const Stack = memo(
  styled(UnstyledStack)(
    ({
      vertical = false,
      wrap = true,
      justify = 'start',
      align = `${vertical ? 'start' : 'center'}`,
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
            ? '0.125rem'
            : spacing === 'tight'
            ? '0.375rem'
            : spacing === 'loose'
            ? '1rem'
            : spacing === 'extraLoose'
            ? '1.25rem'
            : '0.75rem'
        };
        width: 100%;
        height: 100%;
        white-space: nowrap;
    `
  )
) as NamedExoticComponent<StackProps> & { Item: typeof Item };

Stack.Item = Item;

export { Stack };
