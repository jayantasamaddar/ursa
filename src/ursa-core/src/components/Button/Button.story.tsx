import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';

import { Button } from './Button';
import { Icon } from '../Icon';
import { HomeMajor } from '@zenius-one/ursa-icons';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Button>;

/*********************************************************************************/
/** Define Templates */
/*********************************************************************************/
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const IconButtonTemplate: ComponentStory<typeof Button> = ({
  icon,
  ...args
}) => <Button icon={<Icon source={HomeMajor} />} {...args} />;

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

/***************************************************************************/
/** Create Stories */
/***************************************************************************/
export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  uppercase: false,
  onClick: () => alert('Button clicked')
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  primary: true,
  uppercase: false,
  onClick: () => alert('Button clicked')
};

export const Alert = Template.bind({});
Alert.args = {
  children: 'Button',
  uppercase: false,
  alert: true,
  onClick: () => alert('Button clicked')
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  uppercase: false,
  outline: true,
  alert: false,
  disabled: false,
  onClick: () => alert('Button clicked')
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
  primary: true,
  uppercase: false,
  fullWidth: true
};

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  children: 'Home',
  primary: true,
  alert: false,
  outline: false,
  disabled: false,
  uppercase: false
};

export const IconOnlyButton = IconButtonTemplate.bind({});
IconOnlyButton.args = {
  children: 'Home',
  primary: true,
  alert: false,
  outline: false,
  disabled: false,
  uppercase: false,
  iconOnly: true
};

export const Upload_button_for_single_PDF_upload = UploadTemplate.bind({});
Upload_button_for_single_PDF_upload.args = {
  children: 'Import PDF',
  uppercase: false,
  upload: true,
  primary: true,
  uploadOptions: {
    accept: '.pdf'
  }
};

export const Upload_Button_for_multiple_files = UploadTemplate.bind({});
Upload_Button_for_multiple_files.args = {
  children: 'Import Orders',
  uppercase: false,
  upload: true,
  primary: true,
  uploadOptions: {
    allowMultiple: true
  }
};

export const Outline_Button_with_External_Link = Template.bind({});
Outline_Button_with_External_Link.args = {
  children: 'View on GitHub',
  outline: true,
  uppercase: false,
  url: 'https://www.github.com/jayantasamaddar/ursa',
  external: true
};
