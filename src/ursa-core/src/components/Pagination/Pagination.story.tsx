import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const DefaultPagination: ComponentStoryFn<typeof Pagination> =
  Template.bind({});
DefaultPagination.args = {};

export const PaginationWithURL: ComponentStoryFn<typeof Pagination> =
  Template.bind({});
PaginationWithURL.args = {
  previousURL: 'https://www.kollablifestyle.com/pages/about',
  nextURL: 'https://www.kollablifestyle.com/collections/all'
};

export const PaginationWithLabel: ComponentStoryFn<typeof Pagination> =
  Template.bind({});
PaginationWithLabel.args = {
  label: '1/20',
  onPrevious: () => alert('Previous Button is clicked'),
  onNext: () => alert('Next Button is clicked')
};
