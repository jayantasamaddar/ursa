import { ReactNode } from 'react';

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
