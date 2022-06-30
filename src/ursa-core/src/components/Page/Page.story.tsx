import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Page } from '.';

export default {
  title: 'Components/Page',
  component: Page,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const BasicPage = Template.bind({});
BasicPage.args = {
  children: <div>This is a Test page</div>
};
