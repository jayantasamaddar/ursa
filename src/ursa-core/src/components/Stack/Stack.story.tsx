import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

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

const NoWrapTemplate: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Tag name="Jackets & Hoodies" />
    <Tag name="Red" />
    <Tag name="Black" />
    <Tag name="Cotton" />
    <Tag name="Polyurethane" />
    <Tag name="Menswear" />
    <Tag name="Outerwear" />
    <Tag name="Fall-Winter 2022" />
    <Tag name="Runway" />
    <Tag name="New In" />
    <Tag name="Best Sellers" />
    <Tag name="Most Reviewed" />
    <Tag name="Eco-Friendly" />
    <Tag name="Upcycled" />
  </Stack>
);

export const DefaultStack: ComponentStoryFn<typeof Stack> = Template.bind({});
DefaultStack.args = {
  vertical: false,
  align: 'center',
  justify: 'start',
  spacing: 'normal',
  wrap: true
};

export const Stack_fill_space_evenly: ComponentStoryFn<typeof Stack> =
  Template.bind({});
Stack_fill_space_evenly.args = {
  vertical: false,
  align: 'center',
  justify: 'evenly',
  spacing: 'normal',
  wrap: true
};

export const VerticalStack: ComponentStoryFn<typeof Stack> = Template.bind({});
VerticalStack.args = {
  vertical: true,
  align: 'start',
  justify: 'start',
  spacing: 'normal',
  wrap: true
};

export const Stack_with_an_Item_filling_space: ComponentStoryFn<typeof Stack> =
  StackItemTemplate.bind({});
Stack_with_an_Item_filling_space.args = {
  vertical: false,
  align: 'center',
  justify: 'between',
  spacing: 'normal',
  wrap: true
};

export const HorizontalStack_withNoWrap: ComponentStoryFn<typeof Stack> =
  NoWrapTemplate.bind({});
HorizontalStack_withNoWrap.args = {
  justify: 'start',
  spacing: 'loose',
  wrap: false
};
