import React, { FC, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface PageProps {
  /** Class attribute for the Page Component */
  className?: string;
  /** Content for the Page */
  children: ReactNode;
}

const UrsaPage: FC<PageProps> = ({ className, children }): ReactElement => {
  return <div className={`Ursa-Page ${className || ''}`}>{children}</div>;
};

export const Page = styled(UrsaPage)(
  ({ theme: { color } }) => `
        background-color: ${color['--ursa-bg-primary']};
        color: ${color['--ursa-text-primary']};
    `
);
