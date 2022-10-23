import React, { useCallback, useState, ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from './Radio';
import { Stack } from '../Stack';

export default {
  title: 'Components/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    },
    [value]
  );

  return (
    <Stack vertical>
      <Radio
        name="payment_method"
        label="Prepaid"
        value="prepaid"
        checked={value === 'prepaid'}
        onChange={handleChange}
        helpText="Orders made by paying by cash, credit or debit cards, wallets, UPI"
      />
      <Radio
        name="payment_method"
        label="COD"
        value="cod"
        checked={value === 'cod'}
        onChange={handleChange}
        helpText="Cash on Delivery orders"
      />
    </Stack>
  );
};

const DisabledTemplate: ComponentStory<typeof Radio> = () => {
  const [value, setValue] = useState<string>('s');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, disabled } = e.target;
      !disabled && setValue(value);
    },
    [value]
  );

  return (
    <Stack>
      <Radio
        name="sizes"
        label="S"
        value="s"
        checked={value === 's'}
        onChange={handleChange}
      />
      <Radio
        name="sizes"
        label="M"
        value="m"
        checked={value === 'm'}
        onChange={handleChange}
      />
      <Radio
        name="sizes"
        label="L"
        value="l"
        checked={value === 'l'}
        onChange={handleChange}
      />
      <Radio
        name="sizes"
        label="XL"
        value="xl"
        checked={false}
        disabled
        onChange={handleChange}
      />
      <Radio
        name="sizes"
        label="XXL"
        value="xxl"
        checked={false}
        disabled
        onChange={handleChange}
      />
    </Stack>
  );
};

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {};

export const DisabledRadioButton = DisabledTemplate.bind({});
DisabledRadioButton.args = {};
