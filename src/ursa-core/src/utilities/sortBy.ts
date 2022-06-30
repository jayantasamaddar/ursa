import { DataGridColumn, DataGridRow } from '../types';

type Sort = 'asc' | 'desc';

export const sortDataBy = (
  ref: DataGridColumn[],
  dataArray: DataGridRow[],
  order: Sort
) => {
  const arr = [...dataArray];

  for (let i = 0; i < ref.length; i++) {
    const name = ref[i].name as string;

    for (let j = 0; j < arr.length; j++) {
      const compare = (a: DataGridRow, b: DataGridRow) => {
        if (order === 'desc')
          return a[name] < b[name] ? 1 : a[name] > b[name] ? -1 : 0;
        return a[name] < b[name] ? -1 : a[name] > b[name] ? 1 : 0;
      };
      arr.push(...arr.splice(0, arr.length).sort((a, b) => compare(a, b)));
    }
  }
  return arr;
};
