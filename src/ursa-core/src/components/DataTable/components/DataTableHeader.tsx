import { FC, ReactElement, MouseEvent } from 'react';

interface Props {
  className?: string;
  column: {
    name: string;
    title: string;
  };
  index: number;
  onClick: (event: MouseEvent<HTMLTableCellElement>) => void;
}

const DataTableHeader: FC<Props> = ({
  column: { name, title },
  index,
  className,
  onClick,
}): ReactElement => {
  return (
    <th
      className={`data-table-column cursor-pointer ${className || ''}`}
      key={index}
      data-name={name}
      data-sort={''}
      onClick={onClick}
    >
      <div className="">
        <span className="text-standard">{title}</span>
        <span className={`icon sort px-8`}>
          <i className={`text-base text-slate-600 fas `}></i>
        </span>
      </div>
    </th>
  );
};

export default DataTableHeader;
