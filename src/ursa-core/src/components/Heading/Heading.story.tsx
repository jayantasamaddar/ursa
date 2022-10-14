import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const DefaultHeading: ComponentStoryFn<typeof Heading> = Template.bind(
  {}
);
DefaultHeading.args = {
  children: 'Shipments'
};
