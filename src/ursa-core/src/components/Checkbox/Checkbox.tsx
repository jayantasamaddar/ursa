import React, {
  FC,
  ReactElement,
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  useRef,
  forwardRef,
  ForwardedRef
} from 'react';

import { MinusMinor, TickMinor } from '@zenius-one/ursa-icons';
import { Icon } from '../Icon';
import styled from '@emotion/styled';

export interface CheckboxProps {
  /** Name for form input */
  name: string;
  /** Label for the checkbox */
  label: string;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Value for form input */
  value?: string;
  /* Classes to apply to the tag */
  className?: string;
  /** Checkbox is selected. */
  checked?: boolean | 'indeterminate';
  /** Disable input */
  disabled?: boolean;
  /** Callback when checkbox is toggled */
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Callback when checkbox is focussed */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Callback when focus is removed */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Indicates the ID of the element that is controlled by the checkbox*/
  ariaControls?: string;
  /** Indicates the ID of the element that describes the checkbox*/
  ariaDescribedBy?: string;
}

const UrsaCheckbox: FC<CheckboxProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
    const {
      name,
      label,
      labelHidden,
      value,
      className,
      checked,
      disabled,
      onChange,
      onFocus,
      onBlur
    } = props;

    const id = `${name}-${Math.random()}`;
    const [isChecked, setIsChecked] = useState(checked == true || false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    /********************************************************************/
    // Handle Indeterminate
    /********************************************************************/
    const isIndeterminate = checked === 'indeterminate';

    const indeterminateAttributes = isIndeterminate
      ? { indeterminate: 'true', 'aria-checked': 'mixed' as const }
      : { 'aria-checked': isChecked };

    const iconSource = isIndeterminate ? MinusMinor : TickMinor;

    useEffect(() => {
      if (inputRef.current) {
        if (checked === 'indeterminate') {
          inputRef.current.indeterminate = true;
        } else {
          inputRef.current.indeterminate = false;
          setIsChecked(Boolean(checked));
        }
      }
    }, [checked]);

    /********************************************************************/
    // Event Handlers
    /********************************************************************/
    const handleClick = useCallback((event: MouseEvent<HTMLInputElement>) => {
      setIsChecked((prevState) => !prevState);
    }, []);

    /********************************************************************/
    // Render Checkbox JSX
    /********************************************************************/

    return (
      <div className={`Ursa-CheckboxContainer ${className || ''}`}>
        <label className="Ursa-Label" htmlFor={id}>
          <input
            id={id}
            className="Ursa-Checkbox"
            ref={inputRef}
            name={name}
            value={value}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            onClick={handleClick}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...indeterminateAttributes}
          />
          <span className="Ursa-CheckboxIcon">
            <Icon source={iconSource} color={'--ursa-white'} />
          </span>

          {!labelHidden && label}
        </label>
      </div>
    );
  }
);

/********************************************************************/
// Styled Checkbox
/********************************************************************/

export const Checkbox = styled(UrsaCheckbox)(
  ({ theme: { color }, labelHidden, checked }) => `
    display: inline-flex;
    align-items: center;
    color: ${color['--ursa-text-primary']};
    padding-bottom: 3px;
    label {
        display: flex;
        align-items: center;
        padding-left: 10px;
        invisibility: ${labelHidden ? 'hidden' : 'visible'};
    }
    input[type="checkbox"] {
        width: 1.2em;
        height: 1.2em;
        border: 2px solid ${color['--ursa-text-primary']};
        clip: rect(0, 0, 0, 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    .Ursa-CheckboxIcon {
      display: inline-flex;
      cursor: pointer;
      height: 1.2em;
      width: 1.2em;
      border-width: 2px;
      border-style: solid;
      border-radius: 2px;
      margin-right: 10px;
      background-color: ${
        checked ? color['--ursa-accent-color'] : color['--ursa-white']
      };
      border-color: ${
        checked
          ? color['--ursa-accent-color']
          : color['--ursa-border-secondary']
      };
    }
    `
);
