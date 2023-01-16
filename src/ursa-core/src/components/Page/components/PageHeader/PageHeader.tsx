import React, { ReactElement, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle, PageTitleProps } from '../PageTitle';
import { Pagination, PaginationProps } from '../../../Pagination';
import { Button } from '../../../Button';
import { Tooltip } from '../../../Tooltip';
import { Breadcrumbs, BreadcrumbsProps } from '../../../Breadcrumbs';
import {
  AlertAction,
  DisabledAction,
  LoadingAction,
  IconAction,
  TooltipAction,
  MenuAction
} from '../../../../types';
import { isInterface, isReactElement } from '../../../../utilities';
import { Popover } from '../../../Popover';
import { ActionList } from '../../../ActionList';

export interface PrimaryAction
  extends AlertAction,
    DisabledAction,
    LoadingAction,
    IconAction,
    TooltipAction {
  /** Identifies button as primary button */
  primary?: boolean;
}

export interface PageHeaderProps extends PageTitleProps {
  /** Collection of Breadcrumbs */
  breadcrumbs?: BreadcrumbsProps['breadcrumbs'];
  /** Pagination details */
  pagination: PaginationProps;
  /** Primary Action for the Page */
  primaryAction?: PrimaryAction | ReactNode;
  /** Collection of Secondary Actions for the Page */
  secondaryActions?: MenuAction[] | ReactNode;
}

const UrsaHeader = styled.div(({ theme: { color, font } }) => ({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  minHeight: '2.25rem',
  padding: '1.25rem 0',
  gap: '1.25rem'
}));

const PrimaryActionMarkup = ({
  primaryAction
}: {
  primaryAction: PageHeaderProps['primaryAction'];
}) => {
  let actionMarkup: ReactNode;
  if (isInterface(primaryAction)) {
    const {
      primary: isPrimary,
      label,
      helpText,
      onAction,
      ...rest
    } = primaryAction;
    /** There has to be a primary button even if it's not provided */
    const primary = isPrimary === undefined ? true : isPrimary;
    const content = (
      <Button primary={primary} onClick={onAction} {...rest}>
        {label}
      </Button>
    );

    actionMarkup = helpText ? (
      <Tooltip content={helpText}>{content}</Tooltip>
    ) : (
      content
    );
  } else actionMarkup = primaryAction;

  return <div className="Ursa-PageHeaderPrimaryAction">{actionMarkup}</div>;
};

export const PageHeader = ({
  title,
  titleMetadata,
  subtitle,
  breadcrumbs = [],
  primaryAction,
  secondaryActions = [],
  pagination
}: PageHeaderProps): ReactElement => {
  const [secondaryButtonActive, setSecondaryButtonActive] = useState(false);
  const triggerSecondaryButton = () =>
    setSecondaryButtonActive((prev) => !prev);

  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const breadcrumbMarkup = breadcrumbs.length ? (
    <Breadcrumbs breadcrumbs={breadcrumbs} />
  ) : undefined;

  const pageTitleMarkup = (
    <PageTitle
      title={title}
      titleMetadata={titleMetadata}
      subtitle={subtitle}
    />
  );

  const primaryActionMarkup = primaryAction ? (
    <PrimaryActionMarkup primaryAction={primaryAction} />
  ) : undefined;

  const paginationMarkup = pagination ? (
    <Pagination {...pagination} />
  ) : undefined;

  let secondaryActionMarkup: ReactElement | undefined;
  if (isInterface(secondaryActions) && secondaryActions.length) {
    secondaryActionMarkup = (
      <Popover
        active={secondaryButtonActive}
        trigger={
          <Button
            onClick={triggerSecondaryButton}
            disclosure={secondaryButtonActive ? 'up' : 'down'}
          >
            {secondaryActions[0].label}
          </Button>
        }
        onClose={triggerSecondaryButton}
      >
        <ActionList items={secondaryActions} />
      </Popover>
    );
  } else if (isReactElement(secondaryActions)) {
    secondaryActionMarkup = <>{secondaryActions}</>;
  }

  /*****************************************************************************************/
  /** Render PageHeader */
  /*****************************************************************************************/
  return (
    <UrsaHeader className="Ursa-PageHeader">
      {breadcrumbMarkup}
      {pageTitleMarkup}
      {secondaryActionMarkup}
      {primaryActionMarkup}
      {paginationMarkup}
    </UrsaHeader>
  );
};
