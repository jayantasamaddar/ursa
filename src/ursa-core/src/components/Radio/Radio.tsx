import styled from '@emotion/styled';
import React, {
  FC,
  ReactElement,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  FocusEvent
} from 'react';
import { generateUniqueID } from '../../utilities';

export interface RadioProps {
  /** Unique ID of the Radio Button */
  id?: string;
  /** Class attribute of the Radio Button */
  className?: string;
  /** Name attribute of the Radio Button */
  name: string;
  /** The Radio Button label */
  label: string;
  /** Value of the Radio Button */
  value?: string;
  /** Callback fired when value is changed */
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  /** Callback fired when value is changed */
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  /** Callback fired when value is changed */
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
  /** Whether Radio Button is checked or not */
  checked?: boolean;
  /** Whether Radio Button is disabled */
  disabled?: boolean;
  /** Help Text to describe the Radio Button */
  helpText?: string;
}

const UrsaRadio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      className,
      label,
      name,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      disabled,
      helpText
    },
    ref
  ): ReactElement => {
    const uniqueID = generateUniqueID();
    const _id = id || `Ursa-RadioButtonInput-${uniqueID}`;
    const labelID = `Ursa-RadioButtonLabel-${uniqueID}`;
    const helpTextID = `Ursa-RadioButtonHelpText-${uniqueID}`;

    return (
      <div className={`Ursa-RadioButtonContainer ${className || ''}`}>
        <span className="Ursa-RadioButton">
          <input
            id={_id}
            className="Ursa-RadioButtonInput"
            ref={ref}
            name={name}
            type="radio"
            value={value ?? (label && label.toLowerCase())}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-checked={checked}
            aria-labelledby={labelID}
            aria-describedby={helpTextID}
          />
          <label id={labelID} className="Ursa-RadioButtonLabel" htmlFor={_id}>
            {label}
          </label>
        </span>
        {helpText && (
          <p id={helpTextID} className="Ursa-RadioButtonHelpText">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

export const Radio = styled(UrsaRadio)(
  ({ theme: { color, fontSize } }) => `
   
    & > .Ursa-RadioButton {
      display: inline-flex;
      align-items: center;

      & > input[type="radio"].Ursa-RadioButtonInput {
        flex: 1 1 auto;
        font-size: ${fontSize['--ursa-font-size-5']};
        width: 1.2em;
        height: 1.2em;
        accent-color: ${color['--ursa-accent-color']};
        cursor: pointer;
      }
  
      & > label.Ursa-RadioButtonLabel {
        flex: 1 1 auto;
        font-size: ${fontSize['--ursa-font-size-5']};
        padding-left: 10px;
        cursor: pointer;
      }
    }

    & > .Ursa-RadioButtonHelpText {
      padding-left: calc(2 * 1.2rem);
      color: ${color['--ursa-text-secondary']}
    }
  `
);
