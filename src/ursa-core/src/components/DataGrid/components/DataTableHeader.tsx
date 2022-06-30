import styled from '@emotion/styled';
import React, { FC, ReactElement, MouseEvent } from 'react';

import { DataGridColumn } from '../../../types';
import { Icon } from '../../Icon';

interface DataGridHeaderProps {
  className?: string;
  column: DataGridColumn;
  index: number;
  onClick: (event: MouseEvent<HTMLTableCellElement>) => void;
}

const UrsaDataGridHeader: FC<DataGridHeaderProps> = ({
  column: { name, label },
  index,
  className,
  onClick
}): ReactElement => {
  return (
    <th
      className={`Ursa-DataGridColumn ${className || ''}`}
      key={index}
      data-name={name}
      data-sort={''}
      onClick={onClick}
    >
      <div className="Ursa-DataGridColumnContent">
        <span className="Ursa-DataGridColumnLabel">{label}</span>
        <span className={`Ursa-DataGridColumnSort`}>
          <i className={`text-base text-slate-600 fas `}></i>
        </span>
      </div>
    </th>
  );
};

export const DataGridHeader = styled(UrsaDataGridHeader)(
  ({ theme: { color, fontSize } }) => `
    cursor: pointer;
    
    .Ursa-DataGridColumnContent {

      .Ursa-DataGridColumnLabel {
        font-size: ${fontSize['--ursa-font-size-4']};
      }

      .Ursa-DataGridColumnSort {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  `
);
