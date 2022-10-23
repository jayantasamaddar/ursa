import React, { Children, ReactNode, ReactElement } from 'react';
import styled from '@emotion/styled';
import { generateUniqueID, wrapWithComponent } from '../../../../utilities';
import { Item } from '../Item';

export interface FormLayoutGroupProps {
  /** Unique ID of the Form Layout Group */
  id?: string;
  /** Class attribute of the Form Layout Group */
  className?: string;
  /** Title attribute of the Form Layout Group */
  title?: string;
  /** The elements that are part of the Form Layout Group */
  children?: ReactNode;
  /** Whether the elements of the group are condensed */
  condensed?: boolean;
  /** Any Help Text that should be part of the group */
  helpText?: ReactNode;
}

const UnstyledFormGroup = ({
  id,
  className,
  title,
  children,
  helpText
}: FormLayoutGroupProps) => {
  const _id = generateUniqueID('Ursa-FormLayoutGroup');

  /** Generate Content */
  const groupItemsMarkup = Children.map(children, (child, index) => {
    return wrapWithComponent(child, Item, {});
  });
  let helpTextMarkup: ReactElement | null = null;
  let titleMarkup: ReactElement | null = null;
  let titleID: string | undefined = undefined;
  let helpTextID: string | undefined = undefined;

  if (helpText) {
    helpTextID = `${_id}-HelpText`;
    helpTextMarkup = (
      <div id={helpTextID} className="Ursa-FormLayoutGroupHelpText">
        {helpText}
      </div>
    );
  }

  if (title) {
    titleID = `${_id}-Title`;
    titleMarkup = (
      <div id={titleID} className="Ursa-FormLayoutGroupTitle">
        {title}
      </div>
    );
  }

  return (
    <div
      className={`Ursa-FormLayoutGroup ${className || ''}`}
      role="group"
      aria-labelledby={titleID}
      aria-describedby={helpTextID}
    >
      {titleMarkup}
      <div className="Ursa-FormLayoutGroupItems">{groupItemsMarkup}</div>
      {helpTextMarkup}
    </div>
  );
};

export const Group = styled(UnstyledFormGroup)(
  ({ condensed }) => `
    & > .Ursa-FormLayoutGroupItems {
      display: flex;
      gap: ${condensed ? '0.625rem' : '2.325rem'};

      & > div.Ursa-FormLayoutGroupItem {
        flex-grow: 1;
      }
    }
  `
);
