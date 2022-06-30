import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { DataGrid } from '.';
import { Button } from '../Button';
import { Page } from '../Page';
import { views, columns, rows, actions } from './data.mock';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => {
  const handleRowSelect = (selectedRows) => console.log(selectedRows);

  return (
    <div className="main-container col-span-6 overflow-x-auto overscroll-x-contain">
      <div className="title-bar flex justify-between">
        <h1>Orders</h1>
        <Button>Sync Orders</Button>
      </div>

      <DataGrid
        className="my-20"
        views={views}
        rows={rows}
        columns={columns}
        rowsPerPage={10}
        actionButtons={{
          actions,
          truncateAfter: 2,
          truncateLabel: 'More Actions'
        }}
        onSelectChange={handleRowSelect}
      />
    </div>
  );
};

export const BasicDataGrid = Template.bind({});
BasicDataGrid.args = {};
