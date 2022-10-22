import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Form } from '.';
import { Textfield, Button } from '../../';

export default {
  title: 'Components/Form',
  component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ onSubmit, ...args }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((oldData) => ({ ...oldData, [name]: value }));
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      setTimeout(() => {
        alert(`${JSON.stringify(formData, null, 2)}`);
      }, 500);
    },
    [formData]
  );

  return (
    <Form {...args} onSubmit={onSubmit || handleSubmit}>
      <Textfield
        name="firstname"
        label="First Name"
        value={formData.firstname}
        onChange={handleChange}
      />
      <Textfield
        name="lastname"
        label="Last Name"
        value={formData.lastname}
        onChange={handleChange}
      />
      <Textfield
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Button primary submit>
        Submit
      </Button>
    </Form>
  );
};

export const BasicForm: ComponentStoryFn<typeof Form> = Template.bind({});
BasicForm.args = {
  name: 'subscribe-form',
  autoComplete: 'off'
};
