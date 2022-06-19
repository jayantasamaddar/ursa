import React, {
  FC,
  ReactElement,
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  useImperativeHandle,
  useRef,
  forwardRef,
  Ref,
} from "react";

import { MinusMInor } from "@zenius/ursa-icons";
import styled from "@emotion/styled";

interface CheckboxProps {
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
  checked?: boolean;
  /** If `indeterminate` shows a horizontal line in the checkbox */
  indeterminate?: boolean;
  /** Disable input */
  disabled?: boolean;
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
  (CheckboxProps, ref: Ref<HTMLInputElement>): ReactElement => {
    const {
      name,
      label,
      value,
      className,
      checked,
      disabled,
      onChange,
      onFocus,
      onBlur,
    } = CheckboxProps;

    const id = `${name}-${Math.random()}`;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current);

    /********************************************************************/
    // Handle Indeterminate
    /********************************************************************/
    // const isIndeterminate = checked === "indeterminate";
    // const isChecked = !isIndeterminate && Boolean(checked);

    // const indeterminateAttributes = isIndeterminate
    //   ? { indeterminate: "true", "aria-checked": "mixed" as const }
    //   : { "aria-checked": isChecked };

    // const iconSource = isIndeterminate ? MinusMInor : undefined;

    /********************************************************************/
    // Event Handlers
    /********************************************************************/
    // const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    //   if (inputRef.current === null || disabled) {
    //     return;
    //   }
    //   inputRef.current.checked = !inputRef.current.checked;
    //   inputRef.current.focus();
    // };

    /********************************************************************/
    // Render Checkbox JSX
    /********************************************************************/

    return (
      <div className={`${className || ""}`}>
        <label className="Ursa-Label" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          className="Ursa-Checkbox"
          ref={inputRef}
          name={name}
          value={value}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          //   {...indeterminateAttributes}
        />
      </div>
    );
  }
);

/********************************************************************/
// Styled Checkbox
/********************************************************************/

export const Checkbox = styled(UrsaCheckbox)(
  ({ theme: { color }, labelHidden }) => `
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    color: ${color["--ursa-text-primary"]};
    label {
        padding-left: 10px;
        invisibility: ${labelHidden ? "hidden" : "visible"};
    }
    input[type="checkbox"] {
        width: 1.2em;
        height: 1.2em;
        border: 2px solid ${color["--ursa-text-primary"]};
    }
    `
);
