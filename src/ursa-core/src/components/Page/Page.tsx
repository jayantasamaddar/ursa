import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { PageHeader, PageHeaderProps } from './components/PageHeader';
import { isInterface, isReactElement } from '../../utilities';

/** PageProps */
export interface PageProps extends PageHeaderProps {
  /** Content for the Page */
  children: ReactNode;
  /** Remove the normal max-width on the page */
  fullWidth?: boolean;
}

const UrsaPage = ({
  className,
  children,
  fullWidth,
  ...rest
}: PageProps): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const hasHeader =
    rest.title ||
    rest.primaryAction ||
    (rest.secondaryActions &&
      ((isInterface(rest.secondaryActions) && !rest.secondaryActions.length) ||
        isReactElement(rest.secondaryActions))) ||
    (Array.isArray(rest.breadcrumbs) && rest.breadcrumbs.length);

  const headerMarkup = hasHeader ? <PageHeader {...rest} /> : undefined;
  /*****************************************************************************************/
  /** Render Page */
  /*****************************************************************************************/
  return (
    <div className={`Ursa-Page ${className || ''}`}>
      {headerMarkup}
      <div className="Ursa-PageContent">{children}</div>
    </div>
  );
};

export const Page = styled(UrsaPage)(({ theme: { color } }) => ({
  padding: '0 1.25rem'
}));
