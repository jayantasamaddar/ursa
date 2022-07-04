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
