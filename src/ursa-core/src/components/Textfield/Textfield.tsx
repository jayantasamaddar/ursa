import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  FocusEvent,
  forwardRef
} from 'react';
import styled from '@emotion/styled';

type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

export interface TextfieldProps {
  name: string;
  label?: string;
  showLabel?: boolean;
  type?: Type;
  id?: string;
  className?: string;
  placeholder?: string;
  placeholderOff?: boolean;
  value?: string;
  defaultValue?: string;
  /** Use the max and min attributes together to create a range of legal values. */
  /** Minimum value for an input field of type:
   * `number`, `range`, `date`, `datetime-local`, `month`, `time` or `week`
   */
  min: number;
  /** Maximum value for an input field of type:
   * `number`, `range`, `date`, `datetime-local`, `month`, `time` or `week`
   */
  max: number;
  minLength?: number;
  maxLength?: number;
  errors?: string[];
  /** Callback fired when value is changed */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Callback fired when a key is pressed up */
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** Callback fired when input is focused */
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when input is blurred */
  onBlur?: (event?: FocusEvent<HTMLInputElement>) => void;
  noOutline?: boolean;
  /** Specify that an input field should automatically get focus when the page loads. */
  autoFocus?: boolean;
  /** Enable automatic completion by the browser. */
  autoComplete?: 'on' | 'off';
}

const UrsaTextfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (props, ref): ReactElement => {
    const {
      id,
      className,
      type = 'text',
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
      onFocus,
      onBlur,
      noOutline,
      autoFocus
    } = props;

    const Name = name
      ?.replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();

    const globalAttributes = {
      id: id || Name,
      className: `Ursa-Input ${noOutline ? ' focus:outline-0' : ''}`,
      name: Name,
      autoFocus,
      placeholder: placeholderOff ? undefined : placeholder || label
    };

    return (
      <div className={`Ursa-Textfield ${className || ''}`} data-field={name}>
        <label className={`${showLabel ? '' : 'hidden'}`} htmlFor={id || Name}>
          {label}
        </label>
        <input
          ref={ref}
          {...globalAttributes}
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
  ({ theme: { color } }) => `
        width: 100%; 

        .Ursa-Input {
          padding: 0.5rem;

          &:focus {
            outline: 1px solid ${color['--ursa-text-secondary']};
            outline-offset: 2px;
          }
        }
    `
);
