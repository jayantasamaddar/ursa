import React, { ReactElement, Fragment, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { ActionButtonProps } from '../../../../types';
import { Button, Popover, ActionList, ButtonGroup } from '../../../..';

const UrsaActionButtons = ({
  actions,
  truncateAfter = 3,
  truncateLabel = 'More Actions'
}: ActionButtonProps): ReactElement => {
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
    <Fragment>
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
        <Popover
          active={toggle}
          trigger={trigger}
          onClose={toggleMore}
          autofocusTarget="first"
        >
          <ActionList
            actionRole="menuitem"
            items={actions.slice(truncateAfter)}
          />
        </Popover>
      )}
    </Fragment>
  );
};

export const ActionButtons = styled(UrsaActionButtons)(
  ({ theme: { color, border, fontSize } }) => `
    `
);
