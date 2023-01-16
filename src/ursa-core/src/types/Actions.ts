import { ReactNode } from 'react';
import { IconSource } from './IconSource';

export interface Action {
  /** A unique identifier for the action */
  id?: string;
  /** Label text the action displays */
  label?: string;
  /** Visually hidden label text for screen readers */
  ariaLabel?: string;
  /** A destination to link to */
  url?: string;
  /** Callback when an action takes place */
  onAction?(): void;
  /** Callback when mouse enter */
  onMouseEnter?(): void;
  /** Callback when element is touched */
  onTouchStart?(): void;
}

export interface LinkAction {
  /** A unique identifier for the action */
  id?: string;
  /** Label text the action displays */
  label?: string;
  /** Visually hidden label text for screen readers */
  ariaLabel?: string;
  /** A destination to link to */
  url: string;
}

export interface CallbackAction {
  /** A unique identifier for the action */
  id?: string;
  /** Label text the action displays */
  label?: string;
  /** Visually hidden label text for screen readers */
  ariaLabel?: string;
  /** Callback when an action takes place */
  onAction(): void;
}

export interface PlainAction extends Action {
  /** Whether or not action be displayed as a plain link */
  plain?: boolean;
}

export interface DisabledAction extends Action {
  /** Whether or not the action is disabled */
  disabled?: boolean;
}

export interface AlertAction extends Action {
  /** Whether or not the action is destructive */
  alert?: boolean;
}

export interface IconAction extends Action {
  /** Source of the icon */
  icon?: IconSource;
}

export interface LoadingAction extends Action {
  /** Whether or not a loading spinner be displayed */
  loading?: boolean;
}

export interface OutlineAction extends Action {
  /** Whether or not the action should be displayed as an outline button */
  outline?: boolean;
}

export interface TooltipAction extends Action {
  /** Text content to render in a tooltip */
  helpText?: React.ReactNode;
}

export interface ComplexAction
  extends Action,
    PlainAction,
    DisabledAction,
    AlertAction,
    IconAction,
    LoadingAction,
    OutlineAction {}

export interface MenuAction extends ComplexAction, TooltipAction {
  /** Zero-indexed numerical position. Overrides the action's order in the menu */
  index?: number;
}

export interface ActionListItem extends DisabledAction, AlertAction {
  /** Help Text to describe the Action Item */
  helpText?: ReactNode;
  /** Prefix content */
  prefix?: ReactNode;
  /** Suffix content */
  suffix?: ReactNode;
  /** Whether the action item is active or not */
  active?: boolean;
  /** The role for the Action Item */
  role?: string;
}

export interface ActionListSection {
  /** Section title */
  title?: string;
  /** Collection of Action Items for the Action List */
  items?: ActionListItem[];
}
