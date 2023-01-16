import React, {
  ReactElement,
  useRef,
  useImperativeHandle,
  forwardRef,
  NamedExoticComponent
} from 'react';
import styled from '@emotion/styled';
import { ActionItem, ActionSection } from './components';
import { ActionListSection, ActionListItem } from '../../types';

export interface ActionListProps {
  /** Collection of actions for the Action List */
  items?: ActionListItem[];
  /** Collection of Sectioned Actions */
  sections?: ActionListSection[];
  /** The Role attribute for each of the action items in the Action List */
  actionRole?: string;
  /** Callback when any item is clicked or keypressed */
  onActionAnyItem?: ActionListItem['onAction'];
}

/*****************************************************************************************/
/** Render Styled ActionList */
/*****************************************************************************************/
const StyledActionList = styled.div(() => ({
  outline: 'none',
  listStyle: 'none',
  margin: 0,
  padding: 0
}));

const ActionList = forwardRef<
  HTMLDivElement | HTMLUListElement,
  ActionListProps
>(
  (
    { items, sections = [], actionRole = 'menuitem', onActionAnyItem },
    ref
  ): ReactElement => {
    console.log({ items });
    /*****************************************************************************************/
    /** Define variables, ref, state */
    /*****************************************************************************************/
    const actionListRef = useRef<HTMLDivElement & HTMLUListElement>(null);

    const finalSections = items ? [{ items }, ...sections] : sections;
    const hasMultipleSections = finalSections.length > 1;
    const Element = hasMultipleSections ? 'ul' : 'div';
    const actionListRole =
      hasMultipleSections && actionRole === 'menuitem' ? 'menu' : undefined;
    const actionListTabIndex =
      hasMultipleSections && actionRole === 'menuitem' ? -1 : undefined;

    useImperativeHandle(ref, () =>
      hasMultipleSections
        ? (actionListRef.current as HTMLUListElement)
        : (actionListRef.current as HTMLDivElement)
    );
    /*****************************************************************************************/
    /** Content Markup */
    /*****************************************************************************************/
    const sectionMarkup = finalSections.map((section, index) =>
      section.items?.length ? (
        <ActionSection
          key={section.title || index}
          section={section}
          hasMultipleSections={hasMultipleSections}
          actionRole={actionRole}
          onActionAnyItem={onActionAnyItem}
        />
      ) : undefined
    );
    /*****************************************************************************************/
    /** Render Unstyled ActionList */
    /*****************************************************************************************/
    return (
      <StyledActionList
        as={Element}
        ref={actionListRef}
        className="Ursa-ActionListContainer"
        role={actionListRole}
        tabIndex={actionListTabIndex}
      >
        {sectionMarkup}
      </StyledActionList>
    );
  }
);

(ActionList as NamedExoticComponent & { Item: typeof ActionItem }).Item =
  ActionItem;

export { ActionList };
