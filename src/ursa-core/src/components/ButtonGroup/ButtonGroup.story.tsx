import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

/******************************************************************************************/
/** Templates */
/******************************************************************************************/
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
    <Button outline>Bold</Button>
    <Button outline>Italic</Button>
    <Button outline>Underline</Button>
    <Button outline>Strikethrough</Button>
  </ButtonGroup>
);

/******************************************************************************************/
/** Stories */
/******************************************************************************************/

export const DefaultButtonGroup: ComponentStoryFn<typeof ButtonGroup> =
  Template.bind({});
DefaultButtonGroup.args = {};

export const ButtonGroupWithSpacing: ComponentStoryFn<typeof ButtonGroup> =
  Template.bind({});
ButtonGroupWithSpacing.args = {
  spacing: 'loose'
};

export const ButtonGroupWithJustification: ComponentStoryFn<
  typeof ButtonGroup
> = Template.bind({});
ButtonGroupWithJustification.args = {
  justify: 'between'
};

export const FullWidth: ComponentStoryFn<typeof ButtonGroup> = Template.bind(
  {}
);
FullWidth.args = {
  fullWidth: true
};

export const Segmented: ComponentStoryFn<typeof ButtonGroup> =
  SegmentedTemplate.bind({});
Segmented.args = {
  segmented: true
};

export const SegmentedButtonGroup_With_OutlineButtons: ComponentStoryFn<
  typeof ButtonGroup
> = SegmentedTemplate2.bind({});
SegmentedButtonGroup_With_OutlineButtons.args = {
  segmented: true
};
