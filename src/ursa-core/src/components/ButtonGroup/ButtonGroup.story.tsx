import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button alert>Cancel</Button>
    <Button>Save</Button>
  </ButtonGroup>
);

const SegmentedTemplate: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Ship Orders</Button>
    <Button>Capture Payments</Button>
  </ButtonGroup>
);

const SegmentedTemplate2: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button plain outline>
      Bold
    </Button>
    <Button plain outline>
      Italic
    </Button>
    <Button plain outline>
      Underline
    </Button>
  </ButtonGroup>
);

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'ButtonGroup',
  fullWidth: true
};

export const Segmented = SegmentedTemplate.bind({});
Segmented.args = {
  children: 'ButtonGroup',
  segmented: true
};

export const Outline_buttons_in_a_segmented_group = SegmentedTemplate2.bind({});
Outline_buttons_in_a_segmented_group.args = {
  children: 'ButtonGroup',
  segmented: true
};
