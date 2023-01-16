import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { TabPanelProps } from '../../../types';

const UrsaTabPanel = ({
  id,
  ariaLabelledBy,
  children,
  className
}: TabPanelProps): ReactElement => {
  return (
    <div
      className={`Ursa-TabPanel ${className || ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
      tabIndex={className === 'show' ? 0 : -1}
    >
      {children}
    </div>
  );
};

export const TabPanel = styled(UrsaTabPanel)(
  ({ className }) => `
        display: ${className?.includes('hidden') ? 'none' : 'flex'};
        flex-grow: 1;
        flex-flow: row wrap;
        padding: 0.75em 1.5em;
        opacity: 0;
        animation: fadeIn 0.2s ease-in-out 0.1s forwards;
        -moz-animation: fadeIn 0.2s ease-in-out 0.1s forwards;
        -o-animation: fadeIn 0.2s ease-in-out 0.1s forwards;

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @-moz-keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @-o-keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
    `
);
