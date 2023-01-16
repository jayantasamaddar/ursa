import styled from '@emotion/styled';
import React, {
  useState,
  useRef,
  useEffect,
  FC,
  ReactElement,
  Fragment,
  MouseEvent,
  ChangeEvent,
  useCallback,
  useMemo
} from 'react';

import {
  ActionButtonProps,
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

import {
  Columns2Major,
  FilterMajor,
  HorizontalDotsMinor,
  SortMinor
} from '@zenius-one/ursa-icons';

import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { generateUniqueID } from '../../utilities';
import { ActionBar } from './components/ActionButtons/ActionBar';

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
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false); //All rows, .Ursa-DataGridCheckbox checkbox on or off
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});

  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const checkboxesRef = useRef<HTMLInputElement[]>([]);
  const theadersRef = useRef<HTMLTableCellElement[]>([]);

  const theaders = document.querySelectorAll(
    "th:not(.data-selector):not([data-sort=''])"
  );

  // console.log({ theaders, theadersRef: theadersRef.current });
  // console.log({ currentView });

  /**************************************************************************************************/
  //    RESETS
  /*************************************************************************************************/

  /* Reset Selection */
  const resetSelection = () => {
    setChecked(false);
    setCheckboxes({});
  };

  /* Reset Sort */
  const resetSort = () =>
    // theadersRef?.current?.forEach((th) => (th.dataset.sort = ''));
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

  const generateUniqueRowID = (row: DataGridRow, prefix: string) => {
    return row.id || (row._id as string) || generateUniqueID(prefix);
  };

  const prevPage = () => {
    setCurrentPageNumber((curr) => {
      if (curr === 1) return 1;
      resetSelection();
      return curr - 1;
    });
  };

  const nextPage = () => {
    setCurrentPageNumber((curr) => {
      if (View?.length && curr === Math.ceil(View.length / rowsPerPage)) {
        return curr;
      }
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

  const selectAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const el = event.target as HTMLInputElement;

      if (el.checked && currentPage?.length) {
        const rows = currentPage.map((row) => ({ [row.id]: true }));
        setCheckboxes(Object.assign({}, ...rows));
      } else {
        resetSelection();
      }
    },
    [checkboxes, currentPage]
  );

  const selectRow = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const el = event.target as HTMLInputElement;
      setCheckboxes((prev) => ({ ...prev, [el.id]: el.checked }));
    },
    [checkboxes]
  );

  /**************************************************************************************************/
  //    useEffect Hooks and Side Effects Management
  /*************************************************************************************************/

  /** Set selectedRows accordingly when checkboxes are modified */
  useEffect(() => {
    const selectedKeys = Object.keys(checkboxes).filter((k) => checkboxes[k]);
    setSelectedRows(
      currentPage?.filter((row) => selectedKeys.includes(row.id)) || []
    );
  }, [checkboxes]);

  /** Control the "checked" state of the selectAll checkbox */
  useEffect(() => {
    if (selectedRows?.length && currentPage?.length) {
      if (selectedRows.length === currentPage.length) setChecked(true);
      else if (selectedRows.length < currentPage.length)
        setChecked('indeterminate');
    } else setChecked(false);
  }, [selectedRows, currentPage]);

  /** Set the rows and reset Current Page Number on selection of a View */
  useEffect(() => {
    const { filters } = currentView as DataGridView;
    if (currentView && filters && filters.length > 0) {
      setView(multipassFilter(All as DataGridRow[], filters));
    } else setView(All);

    setCurrentPageNumber(1); // Set default Page Number when a view is selected
  }, [currentView, All]);

  /* setCurrentPage data based on PageNumber and Selected View */
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
      onSelectChange(selectedRows || []);
    }
    return;
  }, [onSelectChange, selectedRows]);

  /**************************************************************************************************/
  //    Content Markup
  /*************************************************************************************************/

  const controllerMarkup =
    selectedRows?.length !== 0 ? (
      <Button className="Ursa-DataGridControllerButton">
        <Checkbox
          className="Ursa-DataGridRowController"
          name="ursa-controller"
          label={`${selectedRows?.length} selected`}
          checked={checked}
          onChange={selectAll}
        />
      </Button>
    ) : null;

  /*****************************************************************************************/
  // Return JSX
  /*****************************************************************************************/

  return (
    <div className={`Ursa-DataGridComponent ${className || ''}`}>
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
                icon={<Icon source={FilterMajor} />}
                unlink
              />
              <NavItem name="Sort" icon={<Icon source={SortMinor} />} unlink />
              <NavItem
                name="Columns"
                icon={<Icon source={Columns2Major} />}
                unlink
              />
              <NavItem
                name="Menu"
                icon={<Icon source={HorizontalDotsMinor} />}
                unlink
              />
            </>
          }
        />
      </div>

      {selectedRows?.length !== 0 && (
        // <ButtonGroup segmented connectedBottom>
        //   <Button className="Ursa-DataGridControllerButton">
        //     <Checkbox
        //       className="Ursa-DataGridRowController"
        //       name="ursa-controller"
        //       label={`${selectedRows?.length} selected`}
        //       checked={checked}
        //       onChange={selectAll}
        //     />
        //   </Button>

        //   {isValidActions(actionButtons as ActionButtonProps) && (
        //     <ActionButtons {...(actionButtons as ActionButtonProps)} />
        //   )}
        // </ButtonGroup>

        <ActionBar
          controller={controllerMarkup}
          {...(actionButtons as ActionButtonProps)}
        />
      )}

      <div className="Ursa-DataGridContainer">
        <table className="Ursa-DataGrid">
          <thead
            className={`Ursa-DataGridHeader ${
              selectedRows?.length ? 'hidden' : ''
            }`}
          >
            <tr className={`Ursa-DataGridRow`}>
              <th className="Ursa-DataGridColumn data-selector p-10">
                <Checkbox
                  className="Ursa-AllRowsCheckbox"
                  name="ursa-allrows-checkbox"
                  label={`${selectedRows?.length} selected`}
                  labelHidden={true}
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
                        ref={(el: HTMLTableCellElement) =>
                          (theadersRef.current[index] = el)
                        }
                      />
                    </Fragment>
                  );
                })}
            </tr>
          </thead>

          <tbody className="Ursa-DataGridBody" ref={tbodyRef}>
            {currentPage?.map((row, index) => {
              return (
                <tr
                  className="Ursa-DataGridRow"
                  data-id={row.id || (row._id as string)}
                  key={row.id || (row._id as string) || index}
                >
                  <td className="Ursa-DataGridCell text-center">
                    <Checkbox
                      id={generateUniqueRowID(row, 'Ursa-DataGridRowCheckbox')}
                      className="Ursa-DataGridRowCheckbox"
                      name="Ursa-DataGridRowCheckbox"
                      label={`${row.id || (row._id as string)}`}
                      labelHidden={true}
                      checked={checkboxes[row.id]}
                      onChange={selectRow}
                      ref={(el: HTMLInputElement) =>
                        (checkboxesRef.current[index] = el)
                      }
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
        color: ${color['--ursa-text-primary']};
        margin-top: 2.15rem;
        padding-top: 1rem;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        min-width: 100%;
        min-height: 100%;

        .Ursa-DataGridToolbar {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .Ursa-DataGridControllerButton {
          font-size: ${fontSize['--ursa-font-size-5']};
          padding-left: 10px;

          .Ursa-CheckboxLabelText {
            font-size: ${fontSize['--ursa-font-size-3']};
          }
        }

        .Ursa-DataGridActionButtons > .Ursa-ButtonItem > .Ursa-PopoverWrapper {
          height: 100%;
        }

        .Ursa-DataGridActionButtons > 
        .Ursa-ButtonItem > 
        .Ursa-PopoverWrapper >
        .Ursa-ButtonContainer >
        .Ursa-Button {
          border-top-left-radius: unset;
          border-bottom-left-radius: unset;
          border-bottom-right-radius: unset;
        }

        .Ursa-DataGridColumn {
          padding: 0.875rem 10px;
        }

        .Ursa-DataGridContainer {
          overflow-x: auto;
          overscroll-behavior-x: contain;

          .Ursa-DataGrid {
            border-collapse: collapse;
            min-width: max-content;
            width: 100%;
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
