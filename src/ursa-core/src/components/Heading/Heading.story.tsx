import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const DefaultHeading = Template.bind({});
DefaultHeading.args = {
  children: 'Shipments'
};
