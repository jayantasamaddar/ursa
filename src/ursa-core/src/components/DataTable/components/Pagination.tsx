import { FC, ReactElement } from 'react';

interface Props {
  view: {
    [key: string]: unknown;
  }[];
  rowsPerPage: number;
  currentPageNumber: number;
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination: FC<Props> = (props): ReactElement => {
  const { view, rowsPerPage, currentPageNumber, prevPage, nextPage } = props;
  const prevPageExists = currentPageNumber !== 1 ? true : false;
  const nextPageExists =
    currentPageNumber < Math.ceil(view.length / rowsPerPage);
  const active = 'border-slate-700 cursor-pointer';
  return (
    <>
      {view.length > rowsPerPage && (
        <div className="flex data-table-pagination justify-center my-20 bottom-0">
          <div
            className={`data-table-previous p-10 border ${
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

export default Pagination;
