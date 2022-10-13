import styled from '@emotion/styled';
import React, { FC, ReactElement } from 'react';
import { ArrowLeftMinor, ArrowRightMinor } from '@zenius-one/ursa-icons';
import { DataGridRow } from '../../../types';
import { Icon } from '../../Icon';

export interface PaginationProps {
  view: DataGridRow[] | undefined;
  rowsPerPage: number;
  currentPageNumber: number;
  prevPage: () => void;
  nextPage: () => void;
  className?: string;
}

export const UrsaPagination: FC<PaginationProps> = ({
  view,
  rowsPerPage,
  currentPageNumber,
  prevPage,
  nextPage,
  className
}): ReactElement => {
  const prevPageExists = currentPageNumber > 1 ? true : false;
  const nextPageExists =
    currentPageNumber < Math.ceil((view as DataGridRow[]).length / rowsPerPage);
  const active = 'active border-slate-700 cursor-pointer';

  return (
    <>
      {view && view.length > rowsPerPage && (
        <div className={`Ursa-Pagination ${className || ''}`}>
          <div
            className={`Ursa-PaginationPrevious ${
              prevPageExists ? active : 'border-slate-900'
            }`}
            title="Previous"
            onClick={prevPage}
          >
            <Icon
              source={ArrowLeftMinor}
              color={`${
                prevPageExists ? '--ursa-text-secondary' : '--ursa-btn-disabled'
              }`}
            />
          </div>
          <div
            className={`Ursa-PaginationNext ${
              nextPageExists ? active : 'border-slate-900'
            }`}
            title="Next"
            onClick={nextPage}
          >
            <Icon
              source={ArrowRightMinor}
              color={`${
                nextPageExists ? '--ursa-text-secondary' : '--ursa-btn-disabled'
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const Pagination = styled(UrsaPagination)(
  ({ theme: { color, border } }) => `
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    bottom: 0;

    & > .Ursa-PaginationPrevious, .Ursa-PaginationNext {
      padding: 10px;
      border-width: 1px;
      border-style: solid;
      border-color: ${color['--ursa-border-primary']};
    }

    & > .Ursa-PaginationPrevious.active, .Ursa-PaginationNext.active {
      cursor: pointer;
      border-color: ${color['--ursa-border-secondary']};
    }
  `
);
