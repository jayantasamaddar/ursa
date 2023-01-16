import React, { ReactElement, ReactNode } from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { ChevronLeftMinor, ChevronRightMinor } from '@zenius-one/ursa-icons';
import { Icon } from '../Icon';

export interface PaginationProps {
  /** `className` attribute of the Pagination component */
  className?: string;
  /** Text between Pagination Buttons */
  label?: ReactNode;
  /** Whether previous page exists
   * @default true
   */
  hasPrevious?: boolean;
  /** Whether next page exists.
   * @default true
   */
  hasNext?: boolean;
  /** The URL of the previous page */
  previousURL?: string;
  /** The URL of the next page */
  nextURL?: string;
  /** Callback when previous button is clicked */
  onPrevious?(): void;
  /** Callback when next button is clicked */
  onNext?(): void;
  /** Accessibility Label for Previous button */
  previousLabel?: string;
  /** Accessibility Label for Next button */
  nextLabel?: string;
}

export const Pagination = ({
  className,
  label,
  hasPrevious = true,
  hasNext = true,
  previousURL,
  nextURL,
  onPrevious,
  onNext,
  previousLabel,
  nextLabel
}: PaginationProps): ReactElement => {
  const labelMarkup = label ? (
    <span className="Ursa-PaginationLabel">{label}</span>
  ) : undefined;
  const previous = previousLabel ?? 'Previous';
  const next = nextLabel ?? 'Next';

  return (
    <div className={`Ursa-Pagination ${className || ''}`}>
      <ButtonGroup segmented={!label}>
        <Button
          id="Ursa-PaginationPrevious"
          icon={<Icon source={ChevronLeftMinor} />}
          iconOnly
          outline
          disabled={!hasPrevious}
          url={previousURL}
          onClick={onPrevious}
          ariaLabel={previous}
        >
          {previous}
        </Button>
        {labelMarkup}
        <Button
          id="Ursa-PaginationNext"
          icon={<Icon source={ChevronRightMinor} />}
          iconOnly
          outline
          disabled={!hasNext}
          url={nextURL}
          onClick={onNext}
          ariaLabel={next}
        >
          {next}
        </Button>
      </ButtonGroup>
    </div>
  );
};
