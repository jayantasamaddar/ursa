import React, { FC, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { TabPanelProps } from '../../../types';

const UrsaTabPanel: FC<TabPanelProps> = ({
  id,
  ariaLabelledBy,
  content,
  className
}): ReactElement => {
  return (
    <div
      className={`Ursa-TabPanel ${className || ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
      tabIndex={-1}
    >
      {content}
    </div>
  );
};

export const TabPanel = styled(UrsaTabPanel)(
  () => `
        display: flex;
        flex-grow: 1;
        flex-flow: row wrap;
        padding: 0.75em 1.5em;
    `
);
