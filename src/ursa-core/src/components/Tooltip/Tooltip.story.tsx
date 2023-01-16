import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button primary onClick={() => alert('Button Clicked')}>
      Import Products
    </Button>
  </Tooltip>
);

export const DefaultTooltip: ComponentStoryFn<typeof Tooltip> = Template.bind(
  {}
);
DefaultTooltip.args = {
  content: 'Import Products from a File or Cloud Storage'
};
