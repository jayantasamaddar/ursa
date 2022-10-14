import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '../Select';

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  name: 'order_type',
  label: 'Order Type',
  options: [
    { label: 'Prepaid', value: 'prepaid' },
    { label: 'COD', value: 'cod' }
  ]
};
