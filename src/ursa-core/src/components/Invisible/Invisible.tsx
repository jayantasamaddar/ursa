import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface InvisibleProps {
  /** The content to be hidden visually */
  children?: ReactNode;
}

const StyledInvisible = styled.span`
  visibility: hidden !important;
  position: absolute !important;
  top: 0 !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  border: 0 !important;
  outline: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(50%) !important;
`;

export const Invisible = ({ children }: InvisibleProps): ReactElement => {
  return (
    <StyledInvisible className="Ursa-Invisible">{children}</StyledInvisible>
  );
};
