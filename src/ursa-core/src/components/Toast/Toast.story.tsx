import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toast } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [active, setActive] = useState(false);

  const clickHandler = () => setActive((prev) => !prev);

  return (
    <>
      <Button primary onClick={clickHandler}>
        Show Toast
      </Button>
      {active && <Toast onDismiss={clickHandler} {...args} />}
    </>
  );
};

export const BasicToast = Template.bind({});
BasicToast.args = {
  children: 'Order updated'
};

export const ToastWithProgressBarAndPauseOnHover = Template.bind({});
ToastWithProgressBarAndPauseOnHover.args = {
  children: 'Order updated',
  progress: true,
  pauseOnHover: true
};
