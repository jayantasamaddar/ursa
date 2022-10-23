import { ReactNode, ChangeEvent, FocusEvent } from 'react';

export interface Option {
  /** The display label corrsponding to the Option */
  label: string;
  /** Value that corresponds to the Option */
  value: string;
  /** Whether Option is disabled or not */
  disabled?: boolean;
  /** A prefix that appears before the display Label of the Option */
  prefix?: ReactNode;
}

export interface SelectProps {
  /** Unique ID of select field */
  id?: string;
  /** name attribute of the select field */
  name: string;
  /** className attribute of the select field */
  className?: string;
  /** Label text of the select field */
  label: string;
  /** Whether label is hidden */
  labelHidden?: boolean;
  /** The options available to the select field */
  options: Option[];
  /** Value for select field */
  value?: string;
  /** Callback when select is changed */
  onChange?(event: ChangeEvent<HTMLSelectElement>): void;
  /** Callback when select is focused */
  onFocus?(event: FocusEvent<HTMLSelectElement>): void;
  /** Callback when focus is removed */
  onBlur?(event: FocusEvent<HTMLSelectElement>): void;
  /** Whether Select field is disabled or not */
  disabled?: boolean;
  /** Visual required indicator, add an asterisk to label */
  required?: boolean;
  /** Help Text describing the Select field */
  helpText?: string;
  /** Placeholder Text to be shown. */
  placeholder?: string | boolean;
}
