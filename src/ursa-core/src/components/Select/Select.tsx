import styled from '@emotion/styled';
import React, {
  FC,
  ReactElement,
  ChangeEvent,
  FocusEvent,
  forwardRef,
  ForwardedRef
} from 'react';

interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label: string;
  options: Option[];
  className?: string;
  type?: string;
  showLabel?: boolean;
  /** Id of select field */
  id?: string;
  /** Value for select field */
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  /** Callback when select is focused */
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
  /** Callback when focus is removed */
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  /** Visual required indicator, add an asterisk to label */
  requiredIndicator?: boolean;
}

const UrsaSelect: FC<SelectProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLSelectElement>): ReactElement => {
    const {
      id,
      name,
      type,
      label,
      options,
      className,
      value,
      onChange,
      onFocus,
      onBlur,
      requiredIndicator
    } = props;

    return (
      <div className={`${type}-group ${className || ''}`}>
        <label htmlFor={name} className="Ursa-Label">
          {label}
        </label>
        <select
          id={id ?? name}
          ref={ref}
          className="Ursa-Dropdown"
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="">--Select--</option>
          {options?.map((option, index) => {
            return (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
);

export const Select = styled(UrsaSelect)(
  ({ theme: { font, fontSize } }) => `
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-family: ${font['--ursa-font-primary']};

        label {
            padding-bottom: 2px;
        }
        select {
            padding: 0.5em;
            font-size: ${fontSize['--ursa-font-size-3']};
        }
    `
);
