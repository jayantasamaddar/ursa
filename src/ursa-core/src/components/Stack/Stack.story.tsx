import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Stack } from '.';
import { Tag } from '../Tag';

export default {
  title: 'Components/Stack',
  component: Stack,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Tag name={'Pending'} />
    <Tag name={'Unfulfilled'} />
    <Tag name={'Cancelled'} />
    <Tag name={'Returned'} />
  </Stack>
);

export const DefaultStack = Template.bind({});
DefaultStack.args = {
  vertical: false,
  align: 'center',
  justify: 'start',
  spacing: 'normal',
  wrap: true
};

export const Stack_fill_space_evenly = Template.bind({});
Stack_fill_space_evenly.args = {
  vertical: false,
  align: 'center',
  justify: 'evenly',
  spacing: 'normal',
  wrap: true
};

export const VerticalStack = Template.bind({});
VerticalStack.args = {
  vertical: true,
  align: 'start',
  justify: 'start',
  spacing: 'normal',
  wrap: true
};
