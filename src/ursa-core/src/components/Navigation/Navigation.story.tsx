import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme, lightTheme } from '../../styles';

import { Navigation } from '.';
import {
  DataVisualizationMajor,
  OrdersMajor,
  ProductsMajor
} from '@zenius.one/ursa-icons';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Navigation>;

const items = [
  {
    url: 'http://localhost:3000/dashboard',
    label: 'Dashboard',
    icon: DataVisualizationMajor
  },
  {
    url: 'http://localhost:3000/orders',
    label: 'Orders',
    icon: OrdersMajor
  },
  //   {
  //     url: "http://localhost:3000/products",
  //     label: "Products",
  //     icon: ProductsMajor,
  //   },
  {
    url: '/products',
    label: 'Products',
    icon: ProductsMajor,
    selected: true,
    subNavigationItems: [
      {
        url: '/admin/products',
        disabled: false,
        selected: true,
        label: 'Selected sub item'
      },
      {
        url: '/admin/products/transfers',
        disabled: false,
        label: 'Default sub item'
      },
      {
        url: '/admin/products/inventory',
        disabled: true,
        label: 'Disabled sub item'
      }
    ]
  }
];

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <Navigation.Section items={items} />
  </Navigation>
);

export const BasicNavigation = Template.bind({});
BasicNavigation.args = {
  location: '/',
  onDismiss: () => {}
};
