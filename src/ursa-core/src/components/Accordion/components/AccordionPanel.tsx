import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface AccordionPanelProps {
  /** The unique id of the Accordion Panel */
  id: string;
  /** The className attribute of the Accordion Panel */
  className?: string;
  /** Whether Accordion Panel is active or not */
  active?: boolean;
  /** The contents of the Accordion Panel */
  children?: ReactNode;
  /** aria-labelledby attribute. Same as the `id` of the Accordion Header */
  ariaLabelledBy?: string;
}

const UrsaAccordionPanel = ({
  id,
  className,
  children,
  active,
  ariaLabelledBy
}: AccordionPanelProps): ReactElement => {
  return (
    <div
      id={id}
      className={`Ursa-AccordionPanel ${className || ''}`}
      aria-labelledby={ariaLabelledBy}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
};

export const AccordionPanel = styled(UrsaAccordionPanel)(
  ({ theme: { color }, active }) => `
        display: ${active ? 'flex' : 'none'};
        color: ${color['--ursa-text-primary']};
        padding: 1.25rem 0.625rem;
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
