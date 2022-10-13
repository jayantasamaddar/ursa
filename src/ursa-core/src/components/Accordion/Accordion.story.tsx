import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [(Story) => <Story />]
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

export const BasicAccordion: ComponentStoryFn<typeof Accordion> = Template.bind(
  {}
);
