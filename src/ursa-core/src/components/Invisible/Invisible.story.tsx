import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Invisible } from './Invisible';
import { Heading } from '../Heading';
import { FormLayout } from '../FormLayout';
import { Textfield } from '../Textfield';
import { Form } from '../Form';

export default {
  title: 'Components/Invisible',
  component: Invisible
} as ComponentMeta<typeof Invisible>;

const Template: ComponentStory<typeof Invisible> = () => (
  <Form onSubmit={() => {}}>
    <Invisible>
      <Heading>This Title is Hidden</Heading>
    </Invisible>
    <FormLayout>
      <Textfield name="email" label="Email" />
    </FormLayout>
  </Form>
);

export const DefaultInvisible: ComponentStoryFn<typeof Invisible> =
  Template.bind({});
DefaultInvisible.args = {};
