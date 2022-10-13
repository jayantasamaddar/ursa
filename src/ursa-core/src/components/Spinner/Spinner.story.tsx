import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const DefaultSpinner: ComponentStoryFn<typeof Spinner> = Template.bind(
  {}
);
DefaultSpinner.args = {
  size: 'large'
};

export const SmallSpinner: ComponentStoryFn<typeof Spinner> = Template.bind({});
SmallSpinner.args = {
  size: 'small'
};
