import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ActionListItem } from '../../../../types';
import { UnstyledButton } from '../../../UnstyledButton';

const UrsaActionItem = ({
  id,
  className,
  label,
  ariaLabel,
  url,
  onAction,
  onMouseEnter,
  onTouchStart,
  disabled,
  helpText,
  prefix,
  suffix,
  active,
  role
}: ActionListItem & { className?: string }): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const prefixMarkup = prefix ? (
    <span className="Ursa-ActionItemPrefix">{prefix}</span>
  ) : undefined;

  const contentMarkup = (
    <span className="Ursa-ActionItemContent">
      <span className="Ursa-ActionItemLabel">{label}</span>
      {helpText && <p className="Ursa-ActionItemHelpText">{helpText}</p>}
    </span>
  );

  const suffixMarkup = suffix ? (
    <span className="Ursa-ActionItemSuffix">{suffix}</span>
  ) : undefined;

  const actionItemMarkup = (
    <span className="Ursa-ActionItemContainer">
      {prefixMarkup}
      {contentMarkup}
      {suffixMarkup}
    </span>
  );

  /*****************************************************************************************/
  /** Render ActionItem */
  /*****************************************************************************************/
  return (
    <UnstyledButton
      id={id}
      className={`Ursa-ActionItem ${className || ''}`}
      url={disabled ? undefined : url}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onAction}
      role={role}
    >
      {actionItemMarkup}
    </UnstyledButton>
  );
};

export const ActionItem = styled(UrsaActionItem)(
  ({ theme: { color }, helpText }) => `
      cursor: pointer;
      border: 0;
      margin: 0;
      appearance: none;
      width: 100%;
      text-align: left;
      padding: 0.625rem 0.5rem;
      border-radius: 0.25rem;
      outline: 2px solid transparent;
      transition: outline-color 0.2s linear;

      &:focus {
        outline-color: ${color['--ursa-accent-color']};
      }

      &:active {
        outline: none;
        background: ${color['--ursa-action-pressed']};
      }

      &: hover {
        background: ${color['--ursa-action-pressed']};
      }

      .Ursa-ActionItemContainer {
        margin: 0;
        padding: 0;
        line-height: 1;
        display: flex;
        gap: 1.25rem;
      }

      & .Ursa-ActionItemContent {
        display: flex;
        flex-direction: ${helpText ? 'column' : 'row'};
        align-items: ${helpText ? 'flex-start' : 'center'};

        & > .Ursa-ActionItemLabel {
            min-width: 0;
            max-width: 100%;
            flex: 1 1 auto;
            color: ${color['--ursa-black']};
          }
        ${
          helpText &&
          `& > .Ursa-ActionItemHelpText {
            color: ${color['--ursa-text-secondary']};
            padding-top: 0.325rem;
          }`
        }
      }
    `
);
