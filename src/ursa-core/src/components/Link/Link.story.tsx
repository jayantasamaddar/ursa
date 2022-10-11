import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from '../ThemeProvider';
import { darkTheme, lightTheme } from '../../styles';

import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page'
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  external: true
};

export const MonochromeLink = Template.bind({});
MonochromeLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  monochrome: true
};

export const UnstyledLink = Template.bind({});
UnstyledLink.args = {
  url: 'https://www.github.com/jayantasamaddar/ursa',
  children: 'Visit the Ursa Github page',
  unstyled: true,
  external: true
};
