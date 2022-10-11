import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { lightTheme, darkTheme } from '../../styles';

import { Icon } from '../Icon';
import { NotificationMajor, CartMajor } from '@zenius-one/ursa-icons';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Badge>;

const Template = ({ children, color = undefined, ...args }) => (
  <Badge {...args}>
    {children || (
      <Icon className="Notification" source={NotificationMajor} size="large" />
    )}
  </Badge>
);

const StandaloneTemplate = ({
  children = undefined,
  color = undefined,
  ...args
}) => <Badge {...args} />;

export const BasicBadge = Template.bind({});
BasicBadge.args = {
  badgeContent: '5'
};

export const BadgeMaxedOut = Template.bind({});
BadgeMaxedOut.args = {
  badgeContent: 100,
  max: 99
};

export const BadgeInvisible = Template.bind({});
BadgeInvisible.args = {
  badgeContent: 100,
  max: 99,
  invisible: true
};

export const BadgeDot = Template.bind({});
BadgeDot.args = {
  badgeContent: 100,
  max: 99,
  variant: 'dot'
};

export const BadgeStandalone = StandaloneTemplate.bind({});
BadgeStandalone.args = {
  badgeContent: 100,
  max: 99
};
