import styled from '@emotion/styled';
import React, { FC, ReactElement, ReactNode } from 'react';
import { BaseButton } from '../../types';

export interface UnstyledButtonProps extends BaseButton {
  /** The content to display inside the button */
  children: ReactNode;
  [key: string]: any;
}

const UrsaUnstyledButton: FC<UnstyledButtonProps> = ({
  id,
  name,
  children,
  className,
  url,
  external,
  download,
  submit,
  disabled,
  loading,
  pressed,
  role,
  ariaLabel,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  ariaPressed,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...otherProps
}): ReactElement => {
  let buttonMarkup: ReactElement;

  /***************************************************************************************/
  /** Categorize Props */
  /***************************************************************************************/
  const commonProps = {
    id,
    className,
    'aria-label': ariaLabel
  };

  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseEnter,
    onTouchStart
  };

  /***************************************************************************************/
  /** Content Generation Helpers */
  /***************************************************************************************/

  if (url) {
    buttonMarkup = disabled ? (
      <a {...commonProps}>{children}</a>
    ) : (
      <a {...interactiveProps} href={url} {...otherProps}>
        {children}
      </a>
    );
  } else {
    buttonMarkup = (
      <button
        {...interactiveProps}
        name={name}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        aria-busy={loading ? true : undefined}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-describedby={ariaDescribedBy}
        aria-checked={ariaChecked}
        aria-pressed={pressed}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        {...otherProps}
      >
        {children}
      </button>
    );
  }

  return buttonMarkup;
};

export const UnstyledButton = styled(UrsaUnstyledButton)(
  ({ theme: { color, fontSize } }) => `
        background: none;
        color: ${color['--ursa-text-primary']};
        border: 0;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-size: ${fontSize['--ursa-font-size-5']};
    `
);
