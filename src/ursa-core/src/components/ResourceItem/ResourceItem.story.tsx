import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResourceItem } from './ResourceItem';

export default {
  title: 'Components/ResourceItem',
  component: ResourceItem
} as ComponentMeta<typeof ResourceItem>;

const fieldsObj = {
  email: 'jayanta@zenius.one',
  phone: '+91-9888888888'
};

const fieldsData = Object.entries(fieldsObj);

const Template: ComponentStory<typeof ResourceItem> = ({ fields, ...args }) => (
  <ResourceItem {...args} fields={fieldsData} />
);

export const BasicResourceItem = Template.bind({});

BasicResourceItem.args = {
  name: 'Jayanta Samaddar'
  //   image: "https://via.placeholder.com/150",
};
