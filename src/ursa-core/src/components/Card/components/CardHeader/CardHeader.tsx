import styled from '@emotion/styled';
import React, { isValidElement, ReactElement, ReactNode } from 'react';
import { DisabledAction } from '../../../../types';
import { Button } from '../../../Button';
import { ButtonGroup } from '../../../ButtonGroup';
import { Stack } from '../../../Stack';
import { Text } from '../../../Text';

export interface CardHeaderProps {
  /** The title of the Card */
  title?: ReactNode;
  /** Card Actions that are shown immediately after the Title */
  actions?: DisabledAction[];
  /** The contents of the Card Header */
  children?: ReactNode;
}

const StyledCardHeader = styled.div(({ theme: { color, fontSize } }) => ({
  padding: '1.25rem 1.25rem 0'
}));

export const CardHeader = ({
  title,
  actions,
  children
}: CardHeaderProps): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const actionMarkup = actions ? (
    <ButtonGroup>
      {actions.map(({ label, onAction, ...rest }, index) => (
        <Button key={index} onClick={onAction} plain {...rest}>
          {label}
        </Button>
      ))}
    </ButtonGroup>
  ) : undefined;

  const titleMarkup = isValidElement(title) ? (
    title
  ) : (
    <Text as="h2" variant="headingM">
      {title}
    </Text>
  );
  /*****************************************************************************************/
  /** Render CardHeader */
  /*****************************************************************************************/
  return (
    <StyledCardHeader className="Ursa-CardHeader">
      {actionMarkup || children ? (
        <Stack align="baseline" justify="between">
          <Stack.Item>{titleMarkup}</Stack.Item>
          {actionMarkup}
          {children}
        </Stack>
      ) : (
        titleMarkup
      )}
    </StyledCardHeader>
  );
};
