import React, { useState, useCallback } from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../Button';
import { ActionList } from '../ActionList';

export default {
  title: 'Components/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((prev) => !prev), []);

  const trigger = (
    <Button primary onClick={toggleActive} disclosure>
      Menu
    </Button>
  );

  return (
    <Popover
      active={active}
      trigger={trigger}
      onClose={toggleActive}
      autofocusTarget="first"
      {...args}
    >
      <ActionList
        actionRole="menuitem"
        items={[
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
        ]}
      />
    </Popover>
  );
};

export const DefaultPopover: ComponentStoryFn<typeof Popover> = Template.bind(
  {}
);
