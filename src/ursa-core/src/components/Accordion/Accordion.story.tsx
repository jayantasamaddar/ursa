import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme, lightTheme } from '../../styles';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Accordion>;

const itemsData = [
  {
    label: 'Orders',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi
        id provident delectus repudiandae quo error praesentium sunt, aut
        facilis!
      </div>
    )
  },
  {
    label: 'Shipments',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi
        id provident delectus repudiandae quo error praesentium sunt, aut
        facilis!
      </div>
    )
  },
  {
    label: 'Payments',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi
        id provident delectus repudiandae quo error praesentium sunt, aut
        facilis!
      </div>
    )
  }
];

const Template: ComponentStory<typeof Accordion> = ({ items, ...args }) => (
  <Accordion items={itemsData} {...args} />
);

export const BasicAccordion = Template.bind({});
