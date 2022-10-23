import React, { ChangeEvent, useState } from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { FormLayout } from './FormLayout';
import { Textfield } from '../Textfield';

export default {
  title: 'Components/FormLayout',
  component: FormLayout
} as ComponentMeta<typeof FormLayout>;

const Template: ComponentStory<typeof FormLayout> = (args) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  return (
    <FormLayout {...args}>
      <Textfield
        label="First Name"
        name="firstname"
        onChange={handleChange}
        value={formData.firstname}
      />
      <Textfield
        label="Last Name"
        name="lastname"
        onChange={handleChange}
        value={formData.lastname}
      />
      <Textfield
        label="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
    </FormLayout>
  );
};

const GroupedTemplate: ComponentStory<typeof FormLayout> = (args) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  return (
    <FormLayout {...args}>
      <FormLayout.Group>
        <Textfield
          label="First Name"
          name="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <Textfield
          label="Last Name"
          name="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
      </FormLayout.Group>
      <Textfield
        label="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
    </FormLayout>
  );
};

const CondensedTemplate: ComponentStory<typeof FormLayout> = (args) => {
  const [formData, setFormData] = useState<{
    product_name: string;
    quantity?: string;
    price?: string;
    discount?: string;
    amount?: string;
  }>({
    product_name: '',
    quantity: undefined,
    price: undefined,
    discount: undefined,
    amount: undefined
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  return (
    <FormLayout {...args}>
      <FormLayout.Group condensed>
        <Textfield
          label="Product Name"
          name="product_name"
          onChange={handleChange}
          value={formData.product_name}
        />
        <Textfield
          label="Quantity"
          name="quantity"
          type="number"
          onChange={handleChange}
          value={formData.quantity}
        />
        <Textfield
          label="Price"
          name="price"
          type="number"
          onChange={handleChange}
          value={formData.price}
        />
        <Textfield
          label="Discount"
          name="discount"
          type="number"
          onChange={handleChange}
          value={formData.discount}
        />
        <Textfield
          label="Amount"
          name="amount"
          type="number"
          onChange={handleChange}
          value={formData.amount}
        />
      </FormLayout.Group>
    </FormLayout>
  );
};

export const BasicFormLayout: ComponentStoryFn<typeof FormLayout> =
  Template.bind({});
BasicFormLayout.args = {};

export const GroupedFormLayout: ComponentStoryFn<typeof FormLayout> =
  GroupedTemplate.bind({});
GroupedFormLayout.args = {};

export const CondensedFormLayout: ComponentStoryFn<typeof FormLayout> =
  CondensedTemplate.bind({});
CondensedFormLayout.args = {};
