import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Toast } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [openToast, setOpenToast] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenToast(true)}>Show Toast</Button>
      {openToast && <Toast {...args} />}
    </>
  );
};

export const BasicToast = Template.bind({});
BasicToast.args = {
  content: 'Order updated',
  duration: 5000
};
