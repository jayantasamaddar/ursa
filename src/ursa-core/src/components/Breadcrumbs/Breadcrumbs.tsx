import React from 'react';
import { Icon } from '../Icon';
import { ArrowLeftMinor } from '@zenius-one/ursa-icons';
import { Link } from '../Link';
import { UnstyledButton } from '../UnstyledButton';
import { Button } from '../Button';
import { LinkAction, CallbackAction } from '../../types';
import styled from '@emotion/styled';

export interface BreadcrumbsProps {
  breadcrumbs: (CallbackAction | LinkAction)[];
}

const StyledBreadcrumb = styled.nav(() => ({
  marginRight: '1.25rem'
}));

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const breadcrumb = breadcrumbs.at(-1);
  if (!breadcrumb) return null;

  const { id, label, ariaLabel } = breadcrumb as CallbackAction | LinkAction;

  const isLink = 'url' in breadcrumb;

  const contentMarkup = (
    <span className="Ursa-Breadcrumb">
      <Icon source={ArrowLeftMinor} />
    </span>
  );

  const breadcrumbMarkup = (
    <Button
      id={id}
      className="Ursa-BreadcrumbButton"
      url={isLink ? breadcrumb.url : undefined}
      onClick={!isLink ? breadcrumb.onAction : undefined}
      ariaLabel={(ariaLabel || label) ?? 'Back'}
      iconOnly
    >
      {contentMarkup}
    </Button>
  );

  // 'url' in breadcrumb ? (
  //   <Link
  //     className="Ursa-BreadcrumbURL"
  //     url={breadcrumb.url}
  //     aria-label={breadcrumb.ariaLabel}
  //   >
  //     {contentMarkup}
  //   </Link>
  // ) : (
  //   <UnstyledButton
  //     className="Ursa-BreadcrumbButton"
  //     onClick={breadcrumb.onAction}
  //     aria-label={ariaLabel || label}
  //   >
  //     {contentMarkup}
  //   </UnstyledButton>
  // );

  return (
    <StyledBreadcrumb className="Ursa-Breadcrumb" role="navigation">
      {breadcrumbMarkup}
    </StyledBreadcrumb>
  );
};
