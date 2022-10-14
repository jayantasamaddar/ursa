import React, {
  ReactElement,
  ReactNode,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  ChangeEvent
} from 'react';

import styled from '@emotion/styled';

import { BaseButton, UploadButtonProps } from '../../types';
import { Spinner } from '../Spinner';
import { useTestId } from '../../utilities';

export interface ButtonProps extends BaseButton {
  children?: string | ReactElement;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'slim' | 'medium' | 'large';
  fullWidth?: boolean;
  primary?: boolean;
  outline?: boolean;
  plain?: boolean;
  alert?: boolean;
  icon?: React.ReactElement;
  iconOnly?: boolean;
  upload?: boolean;
  uploadOptions?: UploadButtonProps;
}

const UrsaButton = forwardRef<
  HTMLButtonElement | HTMLInputElement,
  ButtonProps
>(
  (
    {
      children,
      id,
      name,
      className,
      url,
      disabled,
      external,
      download,
      submit,
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
      onPointerDown,
      icon,
      iconOnly,
      upload,
      uploadOptions,
      primary,
      outline,
      alert,
      plain,
      size = 'medium'
    },
    ref
  ): ReactElement => {
    /***************************************************************************************/
    /** Declare variables, refs, state */
    /***************************************************************************************/
    const classes = `Ursa-Button ${className ?? ''}`;

    const [dropdownActive, setDropdownActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null); // For File Upload Button (input type: file)
    const buttonRef = useRef<HTMLButtonElement>(null); // For other Buttons

    useImperativeHandle(ref, () =>
      upload
        ? (inputRef.current as HTMLInputElement)
        : (buttonRef.current as HTMLButtonElement)
    );

    /***************************************************************************************/
    /** Handle Events */
    /***************************************************************************************/

    // const toggleDropdownActive = useCallback(
    //   () => setDropdownActive((prev) => !prev),
    //   []
    // );

    const handleUploadButton = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        uploadOptions?.onChange?.(event);
      },
      []
    );

    /***************************************************************************************/
    /** Categorize Props */
    /***************************************************************************************/

    const commonProps = {
      id,
      className: classes,
      'aria-label': ariaLabel
    };

    const linkProps = {
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined
    };

    const interactiveProps = {
      ...commonProps,
      role: role ?? 'button',
      onClick: upload ? () => inputRef.current?.click() : onClick,
      onFocus,
      onBlur,
      onMouseEnter,
      onTouchStart
    };

    const accessibilityProps = {
      'aria-busy': loading ? true : undefined,
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-describedby': ariaDescribedBy,
      'aria-checked': ariaChecked,
      'aria-pressed': ariaPressed
    };

    /***************************************************************************************/
    /** Content Generation Helpers */
    /***************************************************************************************/
    let iconContent: ReactNode;
    if (icon) {
      iconContent = iconOnly ? (
        icon
      ) : (
        <span className="Ursa-ButtonIconLabel">
          {icon} {children}
        </span>
      );
    }

    const buttonContent = loading ? (
      <Spinner color="white" size="small" />
    ) : icon ? (
      iconContent
    ) : (
      children
    );

    /** Enable Button as a Link */
    let buttonMarkup: ReactElement;
    if (url && !upload) {
      buttonMarkup = disabled ? (
        <a {...commonProps} {...linkProps}>
          {buttonContent}
        </a>
      ) : (
        <a {...interactiveProps} {...linkProps} href={url}>
          {buttonContent}
        </a>
      );
    } else {
      /** Generate Button without a Link */
      buttonMarkup = (
        <button
          {...commonProps}
          name={name}
          type={`${submit ? 'submit' : 'button'}`}
          ref={buttonRef}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onPointerDown={onPointerDown}
          {...interactiveProps}
          {...accessibilityProps}
        >
          {buttonContent}
        </button>
      );
    }

    /***************************************************************************************/
    /** Render the Button */
    /***************************************************************************************/

    return (
      <div className="Ursa-ButtonContainer">
        {buttonMarkup}
        {upload && (
          <input
            type="file"
            hidden
            aria-hidden="true"
            ref={inputRef}
            className={classes}
            name={name}
            onChange={handleUploadButton}
            multiple={uploadOptions?.allowMultiple}
            accept={uploadOptions?.accept}
            {...useTestId('button-upload')}
          />
        )}
      </div>
    );
  }
);

export const Button = styled(UrsaButton)(
  ({
    theme: { color, fontSize },
    fullWidth,
    uppercase = false,
    outline,
    primary,
    loading,
    alert,
    disabled,
    textAlign = 'center'
  }) => {
    const ButtonTextColor = `${
      disabled
        ? color['--ursa-btn-disabled']
        : (primary || alert) && !outline
        ? 'white'
        : alert
        ? color['--ursa-btn-alert']
        : outline
        ? alert
          ? color['--ursa-btn-alert']
          : color['--ursa-btn-primary']
        : color['--ursa-text-secondary']
    };`;

    return `
  width: ${fullWidth ? '100%' : 'auto'};
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: ${fontSize['--ursa-font-size-3']};
  font-weight: bold;
  text-transform: ${uppercase ? 'uppercase' : 'none'};
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${
    disabled
      ? color['--ursa-btn-disabled']
      : alert
      ? color['--ursa-btn-alert']
      : primary || outline
      ? color['--ursa-btn-primary']
      : color['--ursa-border-primary']
  };
  background-color: ${
    disabled
      ? 'transparent'
      : outline
      ? 'transparent'
      : alert
      ? color['--ursa-btn-alert']
      : primary || loading
      ? color['--ursa-btn-primary']
      : 'white'
  };
  color: ${ButtonTextColor};
  transition-property: color, background-color, box-shadow, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: "auto";
    background-color: ${
      disabled || outline
        ? 'transparent'
        : alert
        ? color['--ursa-btn-alert-hovered']
        : primary || loading
        ? color['--ursa-btn-primary-hovered']
        : '#F8F8F8'
    };
    border-color: ${
      disabled
        ? color['--ursa-btn-disabled']
        : alert
        ? color['--ursa-btn-alert-hovered']
        : primary || outline || loading
        ? color['--ursa-btn-primary-hovered']
        : 'auto'
    };
    cursor: ${disabled ? 'auto' : 'pointer'};
    box-shadow: ${
      (primary || alert || loading) && !outline
        ? `0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)`
        : 'none'
    };
  }
  .Ursa-ButtonIconLabel {
    display: flex;
    justify-content: ${
      textAlign === 'left'
        ? 'flex-start'
        : textAlign === 'right'
        ? 'flex-end'
        : 'center'
    }
    align-items: center;
    gap: 0.5em;
  }
  .UrsaIcon {
    margin: auto;
    svg {
      fill: ${ButtonTextColor};
    }
  }
`;
  }
);
