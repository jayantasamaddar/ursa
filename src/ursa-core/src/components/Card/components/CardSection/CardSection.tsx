import React, { ReactElement, ReactNode } from 'react';
import { ComplexAction } from '../../../../types';
import { ButtonGroup } from '../../../ButtonGroup';
import { Button } from '../../../Button';
import { Text } from '../../../Text';
import { Stack } from '../../../Stack';
import styled from '@emotion/styled';

export interface CardSectionProps {
  title?: ReactNode;
  children?: ReactNode;
  subdued?: boolean;
  flush?: boolean;
  fullWidth?: boolean;
  /** Allow the card to be hidden when printing */
  hideOnPrint?: boolean;
  actions?: ComplexAction[];
}

const StyledCardSection = styled.div(() => ({
  padding: '1.25rem',

  '& .Ursa-CardSectionTitle': {
    paddingBottom: '0.75rem'
  }
}));

export const CardSection = ({
  title,
  children,
  actions
}: CardSectionProps): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const actionMarkup = actions ? (
    <ButtonGroup>
      {actions.map(({ label, ...rest }) => (
        <Button {...rest}>{label}</Button>
      ))}
    </ButtonGroup>
  ) : undefined;

  const titleMarkup =
    typeof title === 'string' ? (
      <Text as="h3" variant="headingXS" transform="uppercase">
        {title}
      </Text>
    ) : (
      title
    );

  const titleAreaMarkup =
    titleMarkup || actionMarkup ? (
      <div className="Ursa-CardSectionTitle">
        {actionMarkup ? (
          <Stack align="baseline">
            <Stack.Item>{titleMarkup}</Stack.Item>
            {actionMarkup}
          </Stack>
        ) : (
          titleMarkup
        )}
      </div>
    ) : undefined;
  /*****************************************************************************************/
  /** Render Card Section */
  /*****************************************************************************************/
  return (
    <StyledCardSection className="Ursa-CardSection">
      {titleAreaMarkup}
      {children}
    </StyledCardSection>
  );
};
