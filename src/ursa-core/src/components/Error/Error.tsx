import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { AlertMinor } from '@zenius-one/ursa-icons';

interface ErrorProps {
  className?: string;
  children: string;
}

const StyledError = styled.p(
  ({ theme: { color, font, fontSize } }) => `
        display: inline-flex;
        flex-flow: row wrap;
        gap: 5px;
        font-family: ${font['--ursa-font-primary']};
        font-size: ${fontSize['--ursa-font-size-4']};
        color: ${color['--ursa-btn-alert']};
    `
);

export const Error: FC<ErrorProps> = ({
  children,
  className
}): ReactElement => {
  return (
    <StyledError className={`${className || ''}`}>
      <Icon source={AlertMinor} color="--ursa-btn-alert" />
      {children}
    </StyledError>
  );
};
