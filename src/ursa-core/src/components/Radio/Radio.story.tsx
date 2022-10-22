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
export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {};
