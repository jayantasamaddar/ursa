import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from '.';

export default {
  title: 'Components/Page',
  component: Page
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const BasicPage = Template.bind({});
BasicPage.args = {
  children: <div>This is a Test page</div>
};
