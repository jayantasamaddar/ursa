import styled from '@emotion/styled';
import React, {
  useState,
  useRef,
  useEffect,
  FC,
  ReactElement,
  Fragment,
  MouseEvent,
  ChangeEvent
} from 'react';

import {
  ActionButtons as ActionButtonProps,
  DataGridProps,
  DataGridColumn,
  DataGridRow,
  DataGridView
} from '../../types';

import {
  DATAGRID_DEFAULTS,
  isValidActions,
  sortBy,
  multipassFilter
} from './utils';

import {
  DataGridHeader,
  Pagination,
  ActionButtons,
  NavMenu,
  NavItem
} from './components';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Tag } from '../Tag';

const UrsaDataGrid: FC<DataGridProps> = ({
  views = DATAGRID_DEFAULTS.views,
  columns,
  rows,
  rowsPerPage = DATAGRID_DEFAULTS.rowsPerPage,
  actionButtons = DATAGRID_DEFAULTS.actionButtons,
  onSelectChange,
  className
}): ReactElement => {
  /*****************************************************************************************/
  // Initialize State, Refs and Variables
  /*****************************************************************************************/

  const defaultView = views.find((view) => Boolean(view.default));

  const [All] = useState(rows); //all row data received
  const [currentView, setCurrentView] = useState(defaultView); // current view criteria
  const [View, setView] = useState(rows); // contains all rows of the particular view
  const [currentPageNumber, setCurrentPageNumber] = useState(1); // the current page number
  const [currentPage, setCurrentPage] = useState<typeof rows>([]); //contains all rows in current page
  const [selectedRows, setSelectedRows] = useState<typeof rows>([]); // the selected rows of the current page
  const [checked, setChecked] = useState(false); //All rows, .Ursa-DataGridCheckbox checkbox on or off
  const [checkedIndeterminate, setCheckedIndeterminate] = useState(false); // All rows, .Ursa-DataGridRowController indeterminate property on or off

  const checkboxes = document.querySelectorAll('.Ursa-DataGridCheckbox');
  const theaders = document.querySelectorAll(
    "th:not(.data-selector):not([data-sort=''])"
  );

  /**************************************************************************************************/
  //    RESETS
  /*************************************************************************************************/

  /* Reset Selection */
  const resetSelection = () => {
    setChecked(false);
    checkboxes.forEach(
      (checkbox) => ((checkbox as HTMLInputElement).checked = false)
    );
    setSelectedRows([]);
  };

  /* Reset Sort */
  const resetSort = () =>
    theaders.forEach((th) => {
      (th as HTMLTableCellElement).dataset.sort = '';
    });

  /* Reset Icons */
  const resetSortIcons = () =>
    theaders.forEach((th) => {
      const icon = th.querySelector('.icon') as HTMLTableCellElement;
      icon.classList.add('hidden');
      (icon.childNodes[0] as HTMLTableCellElement).classList.remove(
        'fa-arrow-up' || 'fa-arrow-down'
      );
    });

  /**************************************************************************************************/
  //    Event Handlers and State Management
  /*************************************************************************************************/

  const toggleCheck = () => setChecked((prevState) => !prevState);

  const prevPage = () => {
    setCurrentPageNumber((curr) => {
      if (curr === 1) return 1;
      resetSelection();
      return curr - 1;
    });
  };

  const nextPage = () => {
    setCurrentPageNumber((curr) => {
      if (curr === Math.ceil(View?.length || 0 / rowsPerPage)) return curr;
      resetSelection();
      return curr + 1;
    });
  };

  const changeView = (event: MouseEvent<HTMLLIElement>) => {
    resetSelection();
    resetSort();
    resetSortIcons();
    const target = event.target as HTMLLIElement;
    const { name } = (target.closest('.views') as HTMLDivElement)?.dataset;
    setCurrentView(views.find((view) => view.name === name));
  };

  /**** Sort Rows ****/
  const sortRows = (event: MouseEvent<HTMLElement>) => {
    resetSortIcons();
    const target = event.target as HTMLElement;
    const data = target.closest('th')?.dataset;
    const icon = target.closest('th')?.querySelector('.icon');
    icon?.classList.remove('hidden');
    const sort = data?.sort === 'asc' ? 'desc' : 'asc';
    resetSort();

    (icon?.childNodes[0] as HTMLElement).classList.add(
      sort === 'asc' ? ' fa-arrow-up' : ' fa-arrow-down'
    );
    if (data) {
      data.sort = sort;
      const ref = columns?.filter((e) => e.name === data.name);
      setView(sortBy(ref as DataGridColumn[], View as DataGridRow[], sort));
    }
  };

  const selectAll = (event: ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    const tbody = el.closest(
      'tbody.Ursa-DataGridBody'
    ) as HTMLTableSectionElement;
    for (const item of Array.from(tbody.childNodes)) {
      (item.childNodes[0].childNodes[0] as HTMLInputElement).checked =
        el.checked ? true : false;
    }
    el.checked ? setSelectedRows(currentPage) : resetSelection();
  };

  const selectRow = (event: ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    const rowID = el.parentElement?.parentElement?.dataset?.id;

    if (el.checked) {
      const targetRow = currentPage?.find(
        (row) => rowID === (row.id || row._id)?.toString()
      ) as DataGridRow;
      setSelectedRows((prevRows) => prevRows && [...prevRows, targetRow]);
    } else {
      setSelectedRows((prevRows) =>
        prevRows?.filter((row) => rowID !== (row.id || row._id)?.toString())
      );
    }
  };

  /**************************************************************************************************/
  //    useEffect Hooks and Side Effects Management
  /*************************************************************************************************/

  /* useEffect:- Control the "checked" state of the selectAll checkbox */
  useEffect(() => {
    const controller = document.querySelector(
      '.Ursa-DataGridRowController'
    ) as HTMLInputElement;

    if (
      selectedRows &&
      currentPage &&
      selectedRows?.length === currentPage?.length
    ) {
      setChecked(true);
      setCheckedIndeterminate(false);
      if (selectedRows.length > 1 && controller)
        controller.indeterminate = checkedIndeterminate;
    }

    if (
      selectedRows?.length === 0 ||
      (selectedRows && currentPage && selectedRows.length < currentPage.length)
    ) {
      setChecked(false);
      setCheckedIndeterminate(false);
    }

    if (
      selectedRows &&
      currentPage &&
      selectedRows.length > 0 &&
      selectedRows.length < currentPage.length
    ) {
      setCheckedIndeterminate(true);
      if (controller) controller.indeterminate = checkedIndeterminate;
    }
  }, [selectedRows, currentPage, checkedIndeterminate]);

  console.log(selectedRows);

  // useEffect:- On selection of a View
  useEffect(() => {
    const { filters } = currentView as DataGridView;
    if (currentView && filters && filters.length > 0) {
      setView(multipassFilter(All as DataGridRow[], filters));
    } else setView(All);

    setCurrentPageNumber(1); // Set default Page Number when a view is selected
  }, [currentView, All]);

  /* useEffect:- setCurrentPage data based on PageNumber and Selected View */
  useEffect(() => {
    setCurrentPage(
      currentPageNumber === 1
        ? View?.slice(0, View.length > rowsPerPage ? rowsPerPage : View.length)
        : View?.slice(
            rowsPerPage * (currentPageNumber - 1),
            View.length > rowsPerPage * (currentPageNumber - 1) + rowsPerPage
              ? rowsPerPage * (currentPageNumber - 1) + rowsPerPage
              : View.length
          )
    );
  }, [currentPageNumber, View, rowsPerPage]);

  /**************************************************************************************************/
  //    Passing Data to Parent Component
  /*************************************************************************************************/

  useEffect(() => {
    if (onSelectChange) {
      onSelectChange(selectedRows as DataGridRow[]);
    }
    return;
  }, [onSelectChange, selectedRows]);

  /*****************************************************************************************/
  // Return JSX
  /*****************************************************************************************/

  return (
    <div className={`Ursa-DataGrid ${className || ''}`}>
      <div className="Ursa-DataGridToolbar">
        <NavMenu
          NavItems={
            <>
              {views.map((view, index) => {
                return (
                  <div
                    className="views"
                    key={view.name}
                    data-name={view.name}
                    data-index={index}
                  >
                    <NavItem
                      className="text-standard"
                      name={view.label}
                      unlink
                      onClick={changeView}
                    />
                  </div>
                );
              })}
            </>
          }
        />
        <NavMenu
          NavItems={
            <>
              <NavItem
                name="Filter"
                icon={<i className="fas fa-filter"></i>}
                unlink
              />
              <NavItem
                name="Sort"
                icon={<i className="fas fa-sort"></i>}
                unlink
              />
              <NavItem
                name="Columns"
                icon={<i className="fas fa-columns"></i>}
                unlink
              />
              <NavItem
                name="Menu"
                icon={<i className="fas fa-bars"></i>}
                unlink
              />
            </>
          }
        />
      </div>

      {selectedRows?.length !== 0 && (
        <div className="Ursa-DataGridActionBar">
          <div className="Ursa-DataGridRowControllerContainer hover:bg-sky-600">
            <button className="p-10">
              <div className="pr-10 inline-block">
                <input
                  type="checkbox"
                  className="Ursa-DataGridRowController"
                  onClick={toggleCheck}
                  checked={checked}
                  onChange={selectAll}
                />
              </div>
              <div className="inline-block">
                <span className="counter pl-3 pr-6">{`${selectedRows?.length} selected`}</span>
              </div>
            </button>
          </div>

          {isValidActions(actionButtons as ActionButtonProps) && (
            <ActionButtons {...(actionButtons as ActionButtonProps)} />
          )}
        </div>
      )}

      <div className="Ursa-DataGridContainer overflow-x-auto overscroll-x-contain">
        <table className="data-table border-collapse min-w-max w-full">
          <thead
            className={`Ursa-DataGridHeader ${
              selectedRows?.length ? 'hidden' : ''
            }`}
          >
            <tr className={`Ursa-DataGridRow`}>
              <th className="Ursa-DataGridColumn data-selector p-10" key={0}>
                <input
                  type="checkbox"
                  className="Ursa-AllRowsCheckbox"
                  onClick={toggleCheck}
                  checked={checked}
                  onChange={selectAll}
                />
              </th>
              {columns &&
                columns.map((column, index) => {
                  return (
                    <Fragment key={column.name}>
                      <DataGridHeader
                        column={column}
                        index={index}
                        onClick={sortRows}
                      />
                    </Fragment>
                  );
                })}
            </tr>
          </thead>

          <tbody className="Ursa-DataGridBody">
            {currentPage?.map((row, index) => {
              return (
                <tr
                  className="Ursa-DataGridRow"
                  data-id={row.id || (row._id as string)}
                  key={row.id || (row._id as string)}
                >
                  <td className="Ursa-DataGridCell text-center">
                    <input
                      type="checkbox"
                      className="Ursa-DataGridCheckbox"
                      onChange={selectRow}
                    />
                  </td>
                  {columns &&
                    columns.map(({ name, to }, index) => {
                      return (
                        <td
                          className="Ursa-DataGridCell text-slate-400"
                          key={index}
                        >
                          <div className="Ursa-DataGridCellItem">
                            <span
                              className={`w-auto${
                                to && ' hover:text-slate-200'
                              }`}
                              data-name={name}
                              data-status={
                                name && name.includes('status') ? row[name] : ''
                              }
                            >
                              {to ? (
                                <Link
                                  url={`${to.slice(
                                    0,
                                    to.indexOf(':') || to.length
                                  )}${
                                    to.includes(':') &&
                                    (row[
                                      to.slice(to.indexOf(':') + 1, to.length)
                                    ] ||
                                      row[
                                        '_' +
                                          to.slice(
                                            to.indexOf(':') + 1,
                                            to.length
                                          )
                                      ])
                                  }`}
                                >
                                  {row[name as string]}
                                </Link>
                              ) : Array.isArray(row[name as string]) ? (
                                <ul className="flex gap-10">
                                  {(row[name as string] as string[]).map(
                                    (item, indx) => (
                                      <li key={indx}>
                                        <Tag name={item} />
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                row[name as string]
                              )}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        view={View}
        rowsPerPage={rowsPerPage}
        currentPageNumber={currentPageNumber}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

/*****************************************************************************************/
// Styled Component: DataGrid
/*****************************************************************************************/

export const DataGrid = styled(UrsaDataGrid)(
  ({ theme: { color, fontSize } }) => `
        background-color: ${color['--ursa-bg-primary']};
        color: ${color['--ursa-text-secondary']};
        padding-top: 2.15rem;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        & > .Ursa-DataGridToolbar {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .Ursa-DataGridActionBar {
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));

          .Ursa-DataGridRowControllerContainer {
            border: 1px solid ${color['--ursa-border-secondary']};
            border-top-left-radius: 4px;
            
            &:hover {
              
            }
          }
        }

        .Ursa-DataGridHeader {
          align-items: flex-start;
          border: 1px solid ${color['--ursa-border-secondary']};
        }

        tbody.Ursa-DataGridBody {
          border: 1px solid ${color['--ursa-border-secondary']};
          
          & > .Ursa-DataGridRow {
            border: 1px solid ${color['--ursa-border-secondary']};
          }
        }

        .Ursa-DataGridCell {
          padding: 10px;
          cursor: pointer;

          & > .Ursa-DataGridCellItem {
            padding: 10px;
          }
        }

    `
);
