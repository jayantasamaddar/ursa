import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useRef,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
  ChangeEvent
} from 'react';

import styled from '@emotion/styled';

import { BaseButton, UploadButtonProps } from '../../types';
import { Spinner } from '../Spinner';

export interface ButtonProps extends BaseButton {
  children?: string | ReactElement;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'slim' | 'medium' | 'large';
  fullWidth?: boolean;
  primary?: boolean;
  outline?: boolean;
  inverse?: boolean;
  monochrome?: boolean;
  plain?: boolean;
  removeUnderline?: boolean;
  alert?: boolean;
  icon?: React.ReactElement;
  iconOnly?: boolean;
  upload?: boolean;
  uploadOptions?: UploadButtonProps;
}

const UrsaButton: FC<ButtonProps> = forwardRef(
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
      accessibilityLabel,
      role,
      ariaControls,
      ariaExpanded,
      ariaDescribedBy,
      ariaChecked,
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
      uploadOptions = {
        allowMultiple: true,
        accept: undefined
      },
      primary,
      outline,
      alert,
      plain,
      monochrome,
      removeUnderline,
      size = 'medium',
      textAlign,
      fullWidth
    },
    ref: ForwardedRef<HTMLButtonElement | HTMLInputElement>
  ): ReactElement => {
    const classes = `Ursa-Button ${className ?? ''}`;

    const [dropdownActive, setDropdownActive] = useState(false);

    const { allowMultiple, accept, onChange } =
      uploadOptions as UploadButtonProps;

    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () =>
      upload
        ? (inputRef.current as HTMLInputElement)
        : (buttonRef.current as HTMLButtonElement)
    );

    const toggleDropdownActive = useCallback(
      () => setDropdownActive((prev) => !prev),
      []
    );

    const handleUploadButton = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      onChange && onChange(event);
    };

    return (
      <div className="Ursa-ButtonContainer">
        <button
          name={name}
          type={`${upload ? 'button' : submit ? 'submit' : 'button'}`}
          ref={buttonRef}
          className={classes}
          disabled={disabled}
          onClick={upload ? () => inputRef.current?.click() : onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onMouseEnter={onMouseEnter}
          onTouchStart={onTouchStart}
          onPointerDown={onPointerDown}
          role={role ?? 'button'}
        >
          {loading ? (
            <Spinner color="white" size="small" />
          ) : icon ? (
            icon
          ) : (
            children
          )}
        </button>
        {upload && (
          <input
            type="file"
            hidden
            ref={inputRef}
            className={classes}
            name={name}
            onChange={handleUploadButton}
            multiple={allowMultiple}
            accept={accept}
          />
        )}
      </div>
    );
  }
);

export const Button = styled(UrsaButton)(
  ({
    theme: { color },
    fullWidth,
    uppercase = false,
    outline,
    primary,
    loading,
    alert,
    disabled
  }) => `
  width: ${fullWidth ? '100%' : 'auto'};
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-weight: bold;
  text-transform: ${uppercase ? 'uppercase' : 'none'};
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
  color: ${
    disabled
      ? color['--ursa-btn-disabled']
      : primary || alert
      ? 'white'
      : alert && outline
      ? color['--ursa-btn-alert']
      : outline
      ? color['--ursa-btn-primary']
      : color['--ursa-text-secondary']
  };
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
      primary || alert || loading
        ? `0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)`
        : 'none'
    };
  }
`
);
