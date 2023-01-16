import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { ActionList } from './ActionList';
import { Icon } from '../Icon';
import { ImportMinor, ExportMinor } from '@zenius-one/ursa-icons';

export default {
  title: 'Components/ActionList',
  component: ActionList
} as ComponentMeta<typeof ActionList>;

const Template: ComponentStory<typeof ActionList> = (args) => (
  <ActionList {...args} />
);

export const DefaultActionList: ComponentStoryFn<typeof ActionList> =
  Template.bind({});
DefaultActionList.args = {
  actionRole: 'menuitem',
  items: [
    {
      id: '1',
      label: 'Import File',
      onAction: () => console.log('Action: Import File')
    },
    {
      id: '2',
      label: 'Export File',
      onAction: () => console.log('Action: Export File')
    }
  ]
};

export const ActionListWithHelpText: ComponentStoryFn<typeof ActionList> =
  Template.bind({});
ActionListWithHelpText.args = {
  actionRole: 'menuitem',
  items: [
    {
      id: '1',
      label: 'Import Products',
      helpText: 'Import Products to Zenius One',
      onAction: () => console.log('Action: Import File')
    },
    {
      id: '2',
      label: 'Export products',
      helpText: 'Export Products to a selected location',
      onAction: () => console.log('Action: Export File')
    }
  ]
};

export const ActionListWithPrefix: ComponentStoryFn<typeof ActionList> =
  Template.bind({});
ActionListWithPrefix.args = {
  actionRole: 'menuitem',
  items: [
    {
      id: '1',
      prefix: <Icon source={ImportMinor} />,
      label: 'Import Products',
      helpText: 'Import Products to Zenius One',
      onAction: () => console.log('Action: Import File')
    },
    {
      id: '2',
      prefix: <Icon source={ExportMinor} />,
      label: 'Export products',
      helpText: 'Export Products to a selected location',
      onAction: () => console.log('Action: Export File')
    }
  ]
};
