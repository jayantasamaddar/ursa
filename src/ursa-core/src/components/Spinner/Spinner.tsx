import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';

type Size = 'small' | 'large';

export interface SpinnerProps {
  /**
   * Size of spinner
   * @default 'large'
   */
  size?: Size;
  /** Fill color of the spinner */
  color?: string;
  /** Accessible label for the spinner */
  accessibilityLabel?: string;
  /** Allows the component to apply the correct accessibility roles based on focus */
  hasFocusableParent?: boolean;
}

const UrsaStyledSpinner = styled.svg`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: FC<SpinnerProps> = ({
  size = 'large',
  color
}): ReactElement => {
  const spinnerSVGMarkup = (
    <UrsaStyledSpinner
      color={color}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-icon="spinner"
      data-testid="spinner"
      width={size === 'small' ? '16' : '32'}
      height={size === 'small' ? '16' : '32'}
      fill={color ?? '#000'}
    >
      <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z" />
    </UrsaStyledSpinner>
  );

  return <span className="Ursa-Spinner">{spinnerSVGMarkup}</span>;
};
