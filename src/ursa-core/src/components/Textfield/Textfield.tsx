import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  forwardRef,
  ForwardedRef
} from 'react';
import styled from '@emotion/styled';

export interface TextfieldProps {
  name: string;
  label?: string;
  showLabel?: boolean;
  id?: string;
  className?: string;
  placeholder?: string;
  placeholderOff?: boolean;
  value?: string;
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
  errors?: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  noOutline?: boolean;
  autoFocus?: boolean;
}

const UrsaTextfield: FC<TextfieldProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
    const {
      id,
      className,
      label,
      placeholder,
      name,
      value,
      defaultValue,
      minLength,
      maxLength,
      errors,
      showLabel,
      placeholderOff,
      onChange,
      onKeyUp,
      noOutline,
      autoFocus
    } = props;

    const Name = name
      ?.replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();

    return (
      <div className={`${className || ''}`} data-field={name}>
        <label className={`${showLabel ? '' : 'hidden'}`} htmlFor={id || Name}>
          {label}
        </label>
        <input
          ref={ref}
          className={`text${noOutline ? ' focus:outline-0' : ''}`}
          id={id || Name}
          type="text"
          name={Name}
          placeholder={placeholderOff ? undefined : placeholder || label}
          autoComplete="off"
          minLength={minLength}
          maxLength={maxLength}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          autoFocus={autoFocus}
        />

        {/* Error Handling - If errors = [] is passed as props */}
        {errors && errors?.length > 0 && (
          <div className="alert">
            {errors.map((error, indx) => (
              <p className="alert text-red-500" key={indx}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export const Textfield = styled(UrsaTextfield)(
  ({ theme }) => `
        width: 100%; 
    `
);
