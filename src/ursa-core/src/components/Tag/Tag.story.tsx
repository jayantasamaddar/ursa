import React, { useState } from 'react';
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryFn
} from '@storybook/react';
import { Tag } from './Tag';
import { Stack } from '../Stack';

interface TagProps {
  [name: string]: string;
}

const MultiTags: TagProps[] = [
  { name: 'Cancelled' },
  { name: 'Returned' },
  { name: 'Restocked' },
  { name: 'Exchanged' }
];

export default {
  title: 'Components/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

const MultiTagTemplate: ComponentStory<typeof Tag> = (args) => {
  const [tags, setTags] = useState(MultiTags);

  const handleRemove = (name: string) => {
    setTags(tags.filter((tag) => tag.name !== name));
  };

  return (
    <Stack>
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          name={tag.name}
          onRemove={() => handleRemove(tag.name)}
        />
      ))}
    </Stack>
  );
};

export const BasicTag: ComponentStoryFn<typeof Tag> = Template.bind({});
BasicTag.args = {
  name: 'Paid'
};

export const ClickableTag: ComponentStoryFn<typeof Tag> = Template.bind({});
ClickableTag.args = {
  name: 'Fulfilled',
  onClick: () => alert('Clicked')
};

export const RemovableTag: ComponentStoryFn<typeof Tag> = MultiTagTemplate.bind(
  {}
);
