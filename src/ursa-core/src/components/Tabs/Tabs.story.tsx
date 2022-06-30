import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
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

export const DefaultTabs = Template.bind({});

export const VerticalTabs = Template.bind({});

VerticalTabs.args = {
  layout: 'vertical'
};
