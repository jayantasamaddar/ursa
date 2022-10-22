import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Stack } from '.';
import { Tag } from '../Tag';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

export default {
  title: 'Components/Stack',
  component: Stack
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Tag name={'Pending'} />
    <Tag name={'Unfulfilled'} />
    <Tag name={'Cancelled'} />
    <Tag name={'Returned'} />
  </Stack>
);

const StackItemTemplate: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Stack.Item fill={true}>
      <Heading>Shipments</Heading>
    </Stack.Item>
    <Stack.Item justify="end">
      <ButtonGroup>
        <Button>View Orders</Button>
        <Button primary>Create Shipment</Button>
      </ButtonGroup>
    </Stack.Item>
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

export const Stack_with_an_Item_filling_space = StackItemTemplate.bind({});
Stack_with_an_Item_filling_space.args = {
  vertical: false,
  align: 'center',
  justify: 'between',
  spacing: 'normal',
  wrap: true
};
