import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';
import { Accordion } from './Accordion';
import { itemsData } from './data.mock';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [(Story) => <Story />]
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ items, ...args }) => (
  <Accordion items={itemsData} {...args} />
);

export const BasicAccordion: ComponentStoryFn<typeof Accordion> = Template.bind(
  {}
);
