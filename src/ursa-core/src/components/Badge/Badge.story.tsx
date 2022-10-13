import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';
import { Icon } from '../Icon';
import { NotificationMajor } from '@zenius-one/ursa-icons';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({
  children,
  color = undefined,
  ...args
}) => (
  <Badge {...args}>
    {children || (
      <Icon className="Notification" source={NotificationMajor} size="large" />
    )}
  </Badge>
);

const StandaloneTemplate: ComponentStory<typeof Badge> = ({
  children = undefined,
  color = undefined,
  ...args
}) => <Badge {...args} />;

export const BasicBadge: ComponentStoryFn<typeof Badge> = Template.bind({});
BasicBadge.args = {
  badgeContent: 5
};

export const BadgeMaxedOut: ComponentStoryFn<typeof Badge> = Template.bind({});
BadgeMaxedOut.args = {
  badgeContent: 100,
  max: 99
};

export const BadgeInvisible: ComponentStoryFn<typeof Badge> = Template.bind({});
BadgeInvisible.args = {
  badgeContent: 100,
  max: 99,
  invisible: true
};

export const BadgeDot: ComponentStoryFn<typeof Badge> = Template.bind({});
BadgeDot.args = {
  badgeContent: 100,
  max: 99,
  variant: 'dot'
};

export const BadgeStandalone: ComponentStoryFn<typeof Badge> =
  StandaloneTemplate.bind({});
BadgeStandalone.args = {
  badgeContent: 100,
  max: 99
};
