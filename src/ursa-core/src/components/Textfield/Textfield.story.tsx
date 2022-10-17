import React, { useState, useCallback, ChangeEvent } from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';
import { Textfield } from './Textfield';
import { number } from 'yargs';

export default {
  title: 'components/Textfield',
  component: Textfield
} as ComponentMeta<typeof Textfield>;

/**************************************************************************/
/** Templates */
/**************************************************************************/

/** Template 1 */
const Template: ComponentStory<typeof Textfield> = ({
  value,
  onChange,
  ...args
}) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  return <Textfield {...args} value={inputValue} onChange={handleChange} />;
};

/** Template 2 */
const ClearTemplate: ComponentStory<typeof Textfield> = ({
  value,
  onClearButtonClick,
  onChange,
  ...args
}) => {
  const [inputValue, setInputValue] = useState(value ?? 'T-Shirt');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleClearButtonClick = useCallback(() => setInputValue(''), []);

  return (
    <Textfield
      value={inputValue}
      onChange={handleChange}
      clearButton={true}
      onClearButtonClick={handleClearButtonClick}
      {...args}
    />
  );
};

/**************************************************************************/
/** Stories */
/**************************************************************************/
export const DefaultTextfield: ComponentStoryFn<typeof Textfield> =
  Template.bind({});
DefaultTextfield.args = {
  label: 'Name',
  value: 'Jayanta Samaddar'
};

export const RequiredEmail_with_LabelHidden: ComponentStoryFn<
  typeof Textfield
> = Template.bind({});
RequiredEmail_with_LabelHidden.args = {
  type: 'email',
  label: 'Email',
  required: true,
  labelHidden: true,
  value: 'jayanta@zenius.one'
};

export const Password_with_Errors: ComponentStoryFn<typeof Textfield> =
  Template.bind({});
Password_with_Errors.args = {
  name: 'password',
  type: 'password',
  label: 'Password',
  togglePasswordIcon: true,
  errors: [
    'Password is invalid',
    'Password must contain at least 1 upper case, numeric, and special character'
  ]
};

export const MultilineField: ComponentStoryFn<typeof Textfield> = Template.bind(
  {}
);
MultilineField.args = {
  label: 'Description',
  multiline: true,
  min: 4,
  max: 8
};

export const MonospacedFont: ComponentStoryFn<typeof Textfield> = Template.bind(
  {}
);
MonospacedFont.args = {
  label: 'Comments',
  multiline: true,
  monospaced: true,
  value: 'Leave us a message...'
};

export const Disabled: ComponentStoryFn<typeof Textfield> = Template.bind({});
Disabled.args = {
  label: 'Organization Name',
  disabled: true,
  value: 'Zenius'
};

export const ReadOnly: ComponentStoryFn<typeof Textfield> = Template.bind({});
ReadOnly.args = {
  label: 'Organization Name',
  readOnly: true,
  value: 'Zenius'
};

export const TextfieldSelectedOnFocus: ComponentStoryFn<typeof Textfield> =
  Template.bind({});
TextfieldSelectedOnFocus.args = {
  label: 'Organization Name',
  selectOnFocus: true,
  value: 'Zenius'
};

export const TextfieldWithClearButton: ComponentStoryFn<typeof Textfield> =
  ClearTemplate.bind({});
TextfieldWithClearButton.args = {
  label: 'Tag'
};

export const NumberWithPrefix: ComponentStoryFn<typeof Textfield> =
  Template.bind({});
NumberWithPrefix.args = {
  label: 'Amount',
  type: 'number',
  min: 0,
  prefix: '₹'
};
