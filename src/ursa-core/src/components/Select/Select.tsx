import styled from '@emotion/styled';
import React, {
  forwardRef,
  useState,
  ReactElement,
  ReactNode,
  ChangeEvent,
  useCallback
} from 'react';

import { Icon, Label, Invisible } from '../..';
import { SelectMinor } from '@zenius-one/ursa-icons';
import { generateUniqueID, wrapWithComponent } from '../../utilities';
import { SelectProps } from '../../types';

const UrsaSelect = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      label,
      labelHidden,
      options,
      className,
      value = '',
      onChange,
      onFocus,
      onBlur,
      disabled,
      required,
      helpText,
      placeholder
    },
    ref
  ): ReactElement => {
    /***************************************************************************************/
    /** Variables, state, ref */
    /***************************************************************************************/
    const uniqueID = generateUniqueID();
    const _id = id || `Ursa-Select-${uniqueID}`;
    const labelID = `Ursa-SelectLabel-${uniqueID}`;
    const helpTextID = `Ursa-SelectHelpText-${uniqueID}`;
    const [isDirty, setIsDirty] = useState(false);

    /***************************************************************************************/
    /** Event Handlers */
    /***************************************************************************************/
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        setIsDirty(true);
        onChange && onChange(e);
      },
      [isDirty]
    );

    /***************************************************************************************/
    /** Content Markup */
    /***************************************************************************************/
    let labelMarkup: ReactNode = (
      <Label
        id={labelID}
        className="Ursa-SelectLabel"
        htmlFor={_id}
        required={required}
      >
        {label}
      </Label>
    );
    labelMarkup = labelHidden
      ? wrapWithComponent(labelMarkup, Invisible, {})
      : labelMarkup;

    let placeholderMarkup = !Boolean(placeholder) ? undefined : (
      <option value="" aria-hidden="true">
        {typeof placeholder === 'string' ? placeholder : '--Select--'}
      </option>
    );
    if (required && isDirty) placeholderMarkup = undefined;

    const helpTextMarkup = helpText ? (
      <p id={helpTextID} className="Ursa-SelectLabelHelpText">
        {helpText}
      </p>
    ) : undefined;

    /***************************************************************************************/
    /** Render JSX */
    /***************************************************************************************/
    return (
      <div className={`Ursa-SelectContainer ${className || ''}`}>
        {labelMarkup}
        <div className="Ursa-SelectContent">
          <select
            id={_id}
            ref={ref}
            className="Ursa-Select"
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            aria-labelledby={labelID}
            aria-required={required}
            aria-describedby={helpTextID}
          >
            {placeholderMarkup}
            {options?.map((option, index) => {
              return (
                <option
                  value={option.value}
                  disabled={option.disabled}
                  key={index}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
          <Icon source={SelectMinor} size="large" />
        </div>
        {helpTextMarkup}
      </div>
    );
  }
);

const Select = styled(UrsaSelect)(
  ({ theme: { color, font, fontSize }, disabled }) => `
        display: flex;
        flex-direction: column;     
        font-family: ${font['--ursa-font-primary']};

        & > label {
            padding-bottom: 2px;
        }
        & > .Ursa-SelectContent {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;

          & > select {
            width: 100%;
            padding: 0.625rem;
            border: 1px solid ${color['--ursa-btn-disabled']};
            border-radius: 4px;
            font-size: ${fontSize['--ursa-font-size-4']};
            background-color: ${color['--ursa-white']};
            transition: outline 0.05s ease-in-out;
            background-color: transparent;
            appearance: none;
            z-index: 1;

            &:focus {
              outline: 2px solid blue;
              outline-offset: 0.1rem;
            }
          }
          & > select option {
            background-color: ${color['--ursa-btn-basic']};
            color: ${color['--ursa-black']};
          }
          & > .Ursa-Icon {
            position: absolute;
            right: 1rem;
            color: ${disabled ? color['--ursa-btn-disabled'] : 'currentColor'}
          }
        }
        & > .Ursa-SelectCurrentSelected {
          padding: 0.625rem;
        }
        & > .Ursa-SelectLabelHelpText {
          color: ${color['--ursa-text-secondary']};
        }
        
    `
);

Select.displayName = 'Select';

export { Select };
