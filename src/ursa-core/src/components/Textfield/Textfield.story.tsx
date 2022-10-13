import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';
import { Textfield } from './Textfield';

export default {
  title: 'components/Textfield',
  component: Textfield
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => (
  <Textfield {...args} />
);

export const Default: ComponentStoryFn<typeof Textfield> = Template.bind({});

Default.args = {};
