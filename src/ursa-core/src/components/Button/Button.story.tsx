import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { darkTheme } from '../../styles';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

const UploadTemplate: ComponentStory<typeof Button> = ({
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
    <Button
      {...args}
      upload
      uploadOptions={{
        ...uploadOptions,
        allowMultiple: true,
        onChange: handleChange
      }}
    >
      {children}
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  uppercase: false,
  onClick: () => alert('Button clicked')
};

export const Alert = Template.bind({});
Alert.args = {
  children: 'Button',
  uppercase: false,
  alert: true
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  uppercase: false,
  outline: true,
  alert: false,
  disabled: false
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Button',
  uppercase: false,
  fullWidth: true
};

export const Upload_button_for_single_PDF_upload = UploadTemplate.bind({});
Upload_button_for_single_PDF_upload.args = {
  children: 'Import PDF',
  uppercase: false,
  upload: true,
  uploadOptions: {
    allowMultiple: true,
    accept: '.pdf'
  }
};

export const Upload_Button_for_multiple_files = UploadTemplate.bind({});
Upload_Button_for_multiple_files.args = {
  children: 'Import Orders',
  uppercase: false,
  upload: true,
  uploadOptions: {
    allowMultiple: true
  }
};
