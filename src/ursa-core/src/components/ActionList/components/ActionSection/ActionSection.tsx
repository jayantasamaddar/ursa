import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ActionListItem, ActionListSection } from '../../../../types';
import { ActionItem } from '../ActionItem';

export interface ActionSectionProps {
  /** Section of action items */
  section: ActionListSection;
  /** Whether there are multiple Sections or not */
  hasMultipleSections?: boolean;
  /** Role attribute for each action in the List */
  actionRole?: string;
  /** Callback when any item is clicked or keypressed */
  onActionAnyItem?: ActionListItem['onAction'];
}

const ActionList = styled.ul(() => ({
  padding: '0.625rem',

  '& > li + li': {
    paddingTop: '0.3125rem'
  }
}));

export const ActionSection = ({
  section,
  hasMultipleSections,
  actionRole,
  onActionAnyItem
}: ActionSectionProps): ReactElement => {
  /*****************************************************************************************/
  /** Declare variables, refs, state */
  /****************************************************************************************/
  let sectionRole;
  switch (actionRole) {
    case 'option':
      sectionRole = 'presentation';
      break;
    case 'menuitem':
      sectionRole = hasMultipleSections ? 'presentation' : 'menu';
      break;
    default:
      sectionRole = undefined;
      break;
  }
  /*****************************************************************************************/
  /** Handlers */
  /****************************************************************************************/
  const handleAction = (action: ActionListItem['onAction']) => {
    return () => {
      action?.();
      onActionAnyItem?.();
    };
  };

  /*****************************************************************************************/
  /** Content Markup */
  /****************************************************************************************/
  const titleMarkup = section.title ? (
    <p className="Ursa-ActionSectionTitle">{section.title}</p>
  ) : undefined;

  const actionMarkup = section.items?.map(
    ({ label, helpText, onAction, ...itemProps }, index) => (
      <li
        key={`${label}-${index}`}
        role={actionRole === 'menuitem' ? 'presentation' : undefined}
      >
        <ActionItem
          label={label}
          helpText={helpText}
          role={actionRole}
          onAction={handleAction(onAction)}
          {...itemProps}
        />
      </li>
    )
  );

  const sectionMarkup = (
    <div className="Ursa-ActionSectionContainer">
      {titleMarkup}
      <ActionList
        className="Ursa-ActionList"
        role={sectionRole}
        tabIndex={!hasMultipleSections ? -1 : undefined}
      >
        {actionMarkup}
      </ActionList>
    </div>
  );
  /*****************************************************************************************/
  /** Render ActionSection */
  /****************************************************************************************/
  return hasMultipleSections ? (
    <li className="Ursa-ActionSection">{sectionMarkup}</li>
  ) : (
    sectionMarkup
  );
};
