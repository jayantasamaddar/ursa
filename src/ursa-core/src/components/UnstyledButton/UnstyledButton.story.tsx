import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UnstyledButton } from './UnstyledButton';

export default {
  title: 'Components/UnstyledButton',
  component: UnstyledButton
} as ComponentMeta<typeof UnstyledButton>;

const Template: ComponentStory<typeof UnstyledButton> = ({
  children,
  ...args
}) => <UnstyledButton {...args}>{children}</UnstyledButton>;

const UploadTemplate: ComponentStory<typeof UnstyledButton> = ({
  children,
  upload,
  uploadOptions,
  ...args
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    console.log({ files });
  };

  return (
    <UnstyledButton
      {...args}
      upload
      uploadOptions={{
        ...uploadOptions,
        allowMultiple: true,
        onChange: handleChange
      }}
    >
      {children}
    </UnstyledButton>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'UnstyledButton',
  uppercase: false,
  onClick: () => alert('UnstyledButton clicked')
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  uppercase: false,
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  uppercase: false,
  loading: true
};

export const Button_with_URL = Template.bind({});
Button_with_URL.args = {
  children: 'Button',
  uppercase: false,
  url: 'https://www.zenius.one'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Button',
  primary: true,
  uppercase: false,
  fullWidth: true
};
