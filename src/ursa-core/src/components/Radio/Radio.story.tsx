import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from '../ThemeProvider';
import { darkTheme, lightTheme } from '../../styles';

import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  label: 'Prepaid'
};
