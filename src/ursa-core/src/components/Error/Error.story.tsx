import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Error } from '.';

export default {
  title: 'Components/Error',
  component: Error
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const BasicError: ComponentStoryFn<typeof Error> = Template.bind({});

BasicError.args = {
  children: 'This is an error message'
};

export const ErrorWithAlertIcon: ComponentStoryFn<typeof Error> = Template.bind(
  {}
);
ErrorWithAlertIcon.args = {
  children: 'This is an error message',
  icon: true
};
