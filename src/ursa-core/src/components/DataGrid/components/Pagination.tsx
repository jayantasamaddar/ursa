import styled from '@emotion/styled';
import React, { FC, ReactElement } from 'react';
import { DataGridRow } from '../../../types';

interface PaginationProps {
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
  const prevPageExists = currentPageNumber !== 1 ? true : false;
  const nextPageExists =
    currentPageNumber < Math.ceil(view?.length || 0 / rowsPerPage);
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
            <i
              className={`fas fa-angle-left ${
                prevPageExists ? 'text-slate-100' : 'text-slate-900'
              }`}
            ></i>
          </div>
          <div
            className={`data-table-next p-10 border ${
              nextPageExists ? active : 'border-slate-900'
            }`}
            title="Next"
            onClick={nextPage}
          >
            <i
              className={`fas fa-angle-right ${
                nextPageExists ? 'text-slate-100' : 'text-slate-900'
              }`}
            ></i>
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

    .Ursa-PaginationPrevious {
      border-width: 1px;
      border-style: solid;
      border-color: ${color['--ursa-border-primary']};
    }

    .Ursa-PaginationPrevious.active, .Ursa-PaginationNext.active {
      cursor: pointer;
      border-color: ${color['--ursa-border-secondary']};
    }
  `
);

export default Pagination;
