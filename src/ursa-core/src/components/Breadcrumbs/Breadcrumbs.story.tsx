import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const DefaultBreadcrumbs: ComponentStoryFn<typeof Breadcrumbs> =
  Template.bind({});
DefaultBreadcrumbs.args = {
  breadcrumbs: [
    {
      id: '1',
      label: 'All Collections',
      url: 'https://www.kollablifestyle.com/collections/all'
    },
    {
      id: '2',
      label: 'Home',
      url: 'https://www.kollablifestyle.com'
    }
  ]
};
