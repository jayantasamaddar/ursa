import React, { useState, ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  value: selectVal,
  onChange,
  ...args
}) => {
  const [data, setData] = useState<string>(selectVal || '');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setData(value);
  };
  return <Select value={data} onChange={handleChange} {...args} />;
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  name: 'order_type',
  label: 'Order Type',
  options: [
    { label: 'Prepaid', value: 'prepaid' },
    { label: 'COD', value: 'cod' }
  ]
};

export const SelectWithLabelHidden = Template.bind({});
SelectWithLabelHidden.args = {
  ...DefaultSelect.args,
  labelHidden: true
};

export const SelectWithPlaceholderAndHelpText = Template.bind({});
SelectWithPlaceholderAndHelpText.args = {
  name: 'size',
  label: 'Size',
  options: [
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' },
    { label: 'XL', value: 'xl' },
    { label: 'XXL', value: 'xxl' }
  ],
  placeholder: true,
  helpText: 'Choose a size'
};

export const RequiredSelectWithPlaceholder = Template.bind({});
RequiredSelectWithPlaceholder.args = {
  name: 'order_type',
  label: 'Order Type',
  options: [
    { label: 'Prepaid', value: 'prepaid' },
    { label: 'Cash on Delivery', value: 'cod' }
  ],
  placeholder: true,
  required: true,
  helpText: 'Choose whether order is Prepaid or Cash on Delivery'
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  ...SelectWithLabelHidden.args,
  disabled: true,
  placeholder: true
};

// export const SelectWithPrefix = Template.bind({});
// SelectWithPrefix.args = {
//   name: 'country',
//   label: 'Country',
//   options: [
//     { label: 'India', value: 'India', prefix: '+91' },
//     { label: 'USA', value: 'USA', prefix: '+1' }
//   ]
// };
