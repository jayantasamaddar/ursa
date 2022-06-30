import styled from '@emotion/styled';
import React, {
  FC,
  ReactElement,
  ChangeEvent,
  forwardRef,
  ForwardedRef
} from 'react';

export interface RadioProps {
  name: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
  className?: string;
}

const UrsaRadio: FC<RadioProps> = forwardRef(
  (
    { className, label, name, value, checked, onChange },
    ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    return (
      <span className={`Ursa-RadioContainer ${className || ''}`}>
        <input
          ref={ref}
          className="Ursa-Radio"
          id={label?.toLowerCase()}
          type="radio"
          name={name}
          value={value || label?.toLowerCase()}
          onChange={onChange}
          checked={checked}
        />
        <label className="Ursa-RadioLabel" htmlFor={label?.toLowerCase()}>
          {label}
        </label>
      </span>
    );
  }
);

export const Radio = styled(UrsaRadio)(
  ({ theme: { fontSize } }) => `
    display: inline-flex;
    align-items: center;

    input[type="radio"] {
      font-size: ${fontSize['--ursa-font-size-5']};
      width: 1.2em;
      height: 1.2em;
    }

    label {
      font-size: ${fontSize['--ursa-font-size-5']};
      padding-left: 10px;
    }
  `
);
