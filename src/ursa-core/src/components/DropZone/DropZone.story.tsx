import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DropZone } from '.';

export default {
  title: 'Components/Drop Zone',
  component: DropZone
} as ComponentMeta<typeof DropZone>;

const Template: ComponentStory<typeof DropZone> = (args) => {
  const handleDrop = (files, acceptedFiles, rejectedFiles) => {
    console.log({ files, acceptedFiles, rejectedFiles });
  };

  return <DropZone {...args} onDrop={handleDrop} />;
};

export const Drop_Zone_with_a_single_image_file = Template.bind({});
Drop_Zone_with_a_single_image_file.args = {
  label: 'Drag and Drop to Upload a single Image',
  allowMultiple: false,
  accept: 'image/*'
};

export const Drop_Zone_with_multiple_files = Template.bind({});
Drop_Zone_with_multiple_files.args = {
  label: 'Drag and Drop to Upload multiple files',
  allowMultiple: true
};
