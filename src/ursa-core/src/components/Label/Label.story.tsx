import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const DefaultLabel: ComponentStoryFn<typeof Label> = Template.bind({});
DefaultLabel.args = {
  id: 'Ursa-Label',
  children: 'Email',
  required: true
};
