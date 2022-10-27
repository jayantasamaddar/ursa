import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { TagProps } from '../../types';
import { MobileCancelMajor } from '@zenius-one/ursa-icons';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';
import { useTestId } from '../../utilities';

const UrsaTag = ({
  name,
  className,
  onClick,
  onRemove
}: TagProps): ReactElement => {
  const testid = useTestId('test-tag');
  return (
    <div
      className={`Ursa-Tag ${className || ''}`}
      onClick={onClick}
      {...testid}
    >
      <span className="Ursa-TagName">{name}</span>
      {onRemove && (
        <UnstyledButton
          className="Ursa-TagCloseButton"
          ariaLabel={`Remove ${name}`}
          onClick={onRemove}
        >
          <Icon className="Ursa-TagClose" source={MobileCancelMajor} />
        </UnstyledButton>
      )}
    </div>
  );
};

export const Tag = styled(UrsaTag)(
  ({ theme: { color, fontSize, border }, onRemove }) => `
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        font-size: ${fontSize['--ursa-font-size-1']};
        padding: 0.825em 1.375em;
        background-color: ${color['--ursa-tag-bg-basic']};
        color: ${color['--ursa-tag-text']};
        border-radius: ${border['--ursa-border-radius-2xl']};

        &:focus {
          outline: 1px solid ${color['--ursa-btn-primary']};
        }

        ${
          onRemove &&
          `.Ursa-TagClose {
            & > svg {
              fill: ${color['--ursa-tag-text']};
              transition: opacity .15s ease-in-out;

              &:hover {
                fill: ${color['--ursa-black']};
              }
            }
          }`
        }
    `
);
