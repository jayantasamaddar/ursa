import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BasicCard: ComponentStoryFn<typeof Card> = Template.bind({});
BasicCard.args = {
  title: 'Order Information',
  children: <p>View a summary of Order Information</p>,
  sectioned: true
};

export const CardWithHeaderActions: ComponentStoryFn<typeof Card> =
  Template.bind({});
CardWithHeaderActions.args = {
  title: 'Additional Information',
  children: (
    <p>
      Add additional shipping information that the delivery partners can use.
    </p>
  ),
  sectioned: true,
  actions: [{ label: 'Add Info', onAction: () => alert('Add info') }]
};

export const CardWithFooterActions: ComponentStoryFn<typeof Card> =
  Template.bind({});
CardWithFooterActions.args = {
  title: 'Shipment Information',
  children: (
    <Card.Section title="Items">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </Card.Section>
  ),
  primaryFooterAction: {
    label: 'Add Tracking Number',
    onAction: () => alert('Add Tracking Number')
  },
  secondaryFooterActions: [{ label: 'Print', onAction: () => alert('Print') }]
};

export const CardWithMultipleSections: ComponentStoryFn<typeof Card> =
  Template.bind({});
CardWithMultipleSections.args = {
  title: 'Order Information',
  children: (
    <>
      <Card.Section title="Items">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card.Section>
      <Card.Section title="Items">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card.Section>
    </>
  )
};
