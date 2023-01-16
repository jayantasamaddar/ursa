import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const itemsData = [
  {
    id: 'overview',
    label: 'Overview',
    content: <div>This is the Overview Tab</div>,
    selected: true
  },
  {
    id: 'transactions',
    label: 'Transactions',
    content: <div>This is the Transactions Tab</div>
  },
  {
    id: 'comments',
    label: 'Comments',
    content: <div>This is the Comments Tab</div>
  }
];

const Template: ComponentStory<typeof Tabs> = ({ items, ...args }) => (
  <Tabs {...args} items={itemsData} />
);

export const DefaultTabs: ComponentStoryFn<typeof Tabs> = Template.bind({});

export const VerticalTabs: ComponentStoryFn<typeof Tabs> = Template.bind({});

VerticalTabs.args = {
  layout: 'vertical'
};
