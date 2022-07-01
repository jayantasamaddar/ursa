import React, { FC, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

type Justify = 'start' | 'end' | 'evenly' | 'around' | 'between';
type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type Spacing =
  | 'extraTight'
  | 'tight'
  | 'normal'
  | 'loose'
  | 'extraLoose'
  | 'none';

export interface StackProps {
  className?: string;
  children?: ReactNode;
  vertical?: boolean;
  justify?: Justify;
  align?: Align;
  spacing?: Spacing;
  wrap?: boolean;
}

const UrsaStack: FC<StackProps> = ({ className, children }): ReactElement => {
  return <div className={`Ursa-Stack ${className || ''}`}>{children}</div>;
};

export const Stack = styled(UrsaStack)(
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
            : align === 'start'
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
