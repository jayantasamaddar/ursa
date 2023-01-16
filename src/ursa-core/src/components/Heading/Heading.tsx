import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { generateUniqueID } from '../../utilities';

type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  /**
   * The element name to use for the heading
   * @default 'h2'
   */
  element?: HeadingTagName;
  /** The content to display inside the heading */
  children?: ReactNode;
  /** A unique identifier for the heading, used for reference in anchor links  */
  id?: string;
  /** Heading className attribute */
  className?: string;
}

const UnstyledHeading = ({
  element: Element = 'h2',
  children,
  className,
  id
}: HeadingProps): ReactElement => {
  const _id = id || generateUniqueID('Ursa-Heading');

  return (
    <Element id={_id} className={`Ursa-Heading ${className || ''}`}>
      {children}
    </Element>
  );
};

export const Heading = styled(UnstyledHeading)(
  ({ theme: { color } }) => `
        color: ${color['--ursa-text-primary']}
    `
);
