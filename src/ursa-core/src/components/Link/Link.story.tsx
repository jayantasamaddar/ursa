import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const DefaultLink: ComponentStoryFn<typeof Link> = Template.bind({});
DefaultLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page'
};

export const ExternalLink: ComponentStoryFn<typeof Link> = Template.bind({});
ExternalLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  external: true
};

export const MonochromeLink: ComponentStoryFn<typeof Link> = Template.bind({});
MonochromeLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  monochrome: true
};

export const UnstyledLink: ComponentStoryFn<typeof Link> = Template.bind({});
UnstyledLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  unstyled: true,
  external: true
};
