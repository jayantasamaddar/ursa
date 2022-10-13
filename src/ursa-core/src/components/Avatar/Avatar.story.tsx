import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Avatar } from '../Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const SmallAvatar: ComponentStoryFn<typeof Avatar> = Template.bind({});
SmallAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell',
  size: 'small'
};

export const StandardAvatar: ComponentStoryFn<typeof Avatar> = Template.bind(
  {}
);
StandardAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell'
};

export const LargeAvatar: ComponentStoryFn<typeof Avatar> = Template.bind({});
LargeAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell',
  size: 'large'
};

export const Square_with_NoImage_Avatar: ComponentStoryFn<typeof Avatar> =
  Template.bind({});
Square_with_NoImage_Avatar.args = {
  alt: 'Jayanta Samaddar',
  children: 'Jayanta Samaddar',
  variant: 'square'
};
