import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import { Text } from '../../../Text';

export interface PageTitleProps {
  /** `className` attribute of the PageTitle component */
  className?: string;
  /** Visible Title of the Page */
  title?: string;
  /** Visible Subtitle of the Page */
  subtitle?: string;
  /** Additional Info for the page, shown immediately after the title */
  titleMetadata?: ReactNode;
}

const UrsaPageTitle = ({
  className,
  title,
  subtitle,
  titleMetadata
}: PageTitleProps): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const titleMarkup = title ? (
    <Text className="Ursa-PageTitle" as="h1" variant="headingXL">
      {title}
    </Text>
  ) : undefined;

  const metadataMarkup = titleMetadata ? (
    <div className="Ursa-PageMetadata">{titleMetadata}</div>
  ) : undefined;

  const groupedTitle = titleMetadata ? (
    <div className="Ursa-PageTitleGroup">
      {titleMarkup}
      {metadataMarkup}
    </div>
  ) : (
    titleMarkup
  );

  const subtitleMarkup = subtitle ? (
    <div className="Ursa-PageSubtitle">
      <Text className="Ursa-PageSubtitleText" color="subdued">
        {subtitle}
      </Text>
    </div>
  ) : undefined;

  /*****************************************************************************************/
  /** Render PageTitle */
  /*****************************************************************************************/
  return (
    <div className={`Ursa-PageTitleContainer ${className || ''}`}>
      {groupedTitle}
      {subtitleMarkup}
    </div>
  );
};

export const PageTitle = styled(UrsaPageTitle)(({ theme: { color } }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  gap: '0.75rem'
}));
