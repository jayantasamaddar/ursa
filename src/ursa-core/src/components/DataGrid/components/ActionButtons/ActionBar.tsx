import React, { ReactElement, Fragment, useState, useCallback } from 'react';
import { ActionButtonProps, ActionBarProps } from '../../../../types';
import { Button, ButtonGroup, Popover, ActionList } from '../../../..';

export const ActionBar = ({
  controller,
  actions,
  truncateAfter = 3,
  truncateLabel = 'More Actions'
}: ActionBarProps): ReactElement | null => {
  /*************************************************************************/
  // Initialize State
  /*************************************************************************/
  const [toggle, setToggle] = useState(false);

  /*************************************************************************/
  // Handle Events
  /*************************************************************************/
  const toggleMore = () => useCallback(() => setToggle((prev) => !prev), []);

  const trigger = (
    <Button onClick={toggleMore} disclosure>
      {truncateLabel}
    </Button>
  );

  /*************************************************************************/
  // Return JSX
  /*************************************************************************/

  return (
    <ButtonGroup
      className="Ursa-DataGridActionButtons"
      segmented
      connectedBottom
    >
      {controller}

      {actions?.slice(0, truncateAfter).map((button, index) => {
        return (
          <Button
            className="Ursa-ActionButton"
            onClick={button.onAction}
            key={
              button.label
                .replace(/[^a-zA-Z ]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() || index
            }
          >
            {button.label}
          </Button>
        );
      })}

      {actions?.length > (truncateAfter ?? 4) && (
        // <Popover
        //   active={toggle}
        //   trigger={trigger}
        //   onClose={toggleMore}
        //   autofocusTarget="first"
        // >
        //   <ActionList
        //     actionRole="menuitem"
        //     items={actions.slice(truncateAfter)}
        //   />
        // </Popover>

        <Popover
          active={toggle}
          trigger={trigger}
          onClose={toggleMore}
          autofocusTarget="first"
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
      )}
    </ButtonGroup>
  );
};
