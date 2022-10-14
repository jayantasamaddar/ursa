import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const fieldsObj = {
  email: 'jayanta@zenius.one',
  phone: '+91-9888888888'
};

const fieldsData = Object.entries(fieldsObj);

const Template: ComponentStory<typeof Card> = ({ fields, ...args }) => (
  <Card {...args} fields={fieldsData} />
);

export const BasicCard = Template.bind({});

BasicCard.args = {
  name: 'Jayanta Samaddar'
  //   image: "https://via.placeholder.com/150",
};
