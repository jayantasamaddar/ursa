import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme, lightTheme } from '../../styles';

import { Avatar } from '../Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell',
  size: 'small'
};

export const StandardAvatar = Template.bind({});
StandardAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell'
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  src: 'http://placekitten.com/200/200',
  alt: 'Snowbell',
  size: 'large'
};

export const Square_with_NoImage_Avatar = Template.bind({});
Square_with_NoImage_Avatar.args = {
  alt: 'Jayanta Samaddar',
  children: 'Jayanta Samaddar',
  variant: 'square'
};
