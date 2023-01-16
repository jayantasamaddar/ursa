import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from './Page';
import { Card } from '../Card';

export default {
  title: 'Components/Page',
  component: Page
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const BasicPage = Template.bind({});
BasicPage.args = {
  breadcrumbs: [
    {
      label: 'All Prducts',
      url: 'https://www.kollablifestyle.com/collections/all'
    }
  ],
  title: 'Protagonist L/S T-Shirt',
  subtitle: 'Long-sleeve T-shirt',
  primaryAction: {
    label: 'Save',
    onAction: () => alert('Save button clicked'),
    helpText: 'Save the Product'
  },
  secondaryActions: [
    {
      id: '1',
      label: 'Import File',
      onAction: () => console.log('Action: Import File')
    },
    {
      id: '2',
      label: 'Export File',
      onAction: () => console.log('Action: Export File')
    }
  ],
  pagination: {
    previousURL: 'https://www.kollablifestyle.com/pages/about',
    nextURL: 'https://www.kollablifestyle.com/collections/all'
  },
  children: (
    <Card title="Test Page Component" sectioned>
      <p>This is a child of the page</p>
    </Card>
  )
};
