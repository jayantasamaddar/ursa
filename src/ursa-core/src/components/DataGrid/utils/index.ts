/****************************************************************************************/
// Types
/****************************************************************************************/

import {
  ActionButtonProps,
  DataGridColumn,
  DataGridRow,
  DataGridFilter
} from '../../../types';

type Sort = 'asc' | 'desc';

/****************************************************************************************/
// Defaults
/****************************************************************************************/

export const DATAGRID_DEFAULTS = {
  views: [{ id: '0', name: 'all', label: 'All', filters: [], default: true }],
  rowsPerPage: 10,
  actionButtons: []
};

/****************************************************************************************/
// Validations
/****************************************************************************************/

export const isValidActions = (actionButtons: ActionButtonProps) => {
  const requiredKeys = ['actions'];
  const keys = Object.keys(actionButtons);

  // if (!keys.every((key) => requiredKeys.includes(key))) {
  //   return false;
  // }

  for (const key of requiredKeys) {
    if (!actionButtons[key as keyof ActionButtonProps]) return false;
  }

  if (
    !(
      Array.isArray(actionButtons.actions) &&
      Object.keys(actionButtons.actions).length
    )
  ) {
    return false;
  } else return true;
};

/****************************************************************************************/
// Sorting
/****************************************************************************************/

export const sortBy = (
  ref: DataGridColumn[],
  dataArray: DataGridRow[],
  order: Sort
) => {
  const arr = [...dataArray];

  for (let i = 0; i < ref.length; i++) {
    const name = ref[i].name as string;

    for (let j = 0; j < arr.length; j++) {
      const compare = (a: DataGridRow, b: DataGridRow) => {
        const aName = a[name];
        const bName = b[name];
        if (aName !== undefined && bName !== undefined) {
          if (order === 'desc') {
            return aName < bName ? 1 : aName > bName ? -1 : 0;
          }

          return aName < bName ? -1 : aName > bName ? 1 : 0;
        }
        return;
      };
      arr.push(
        ...arr.splice(0, arr.length).sort((a, b) => compare(a, b) as number)
      );
    }
  }
  return arr;
};

/****************************************************************************************/
// Filtering
/****************************************************************************************/

export const multipassFilter = (
  dataArray: DataGridRow[],
  filters: DataGridFilter[]
) => {
  const arr = [...dataArray];
  for (let i = 0; i < filters.length; i++) {
    const key = Object.keys(filters[i])[0];
    arr.push(
      ...arr.splice(0, arr.length).filter((e) => e[key] === filters[i][key])
    );
  }
  return arr;
};
