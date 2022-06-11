import React, {
  FC,
  ReactElement,
  MouseEvent,
  useState,
  useCallback,
} from "react";

import styled from "@emotion/styled";

import { BaseButton } from "../../types";
import { Spinner } from "../Spinner";

export interface ButtonProps extends BaseButton {
  children?: string;
  textAlign?: "left" | "center" | "right";
  size?: "slim" | "medium" | "large";
  fullWidth?: boolean;
  primary?: boolean;
  outline?: boolean;
  inverse?: boolean;
  monochrome?: boolean;
  plain?: boolean;
  removeUnderline?: boolean;
  alert?: boolean;
  icon?: React.ReactElement;
}

const DEFAULT_SIZE = "medium";

const UrsaButton: FC<ButtonProps> = ({
  children,
  id,
  name,
  className,
  url,
  disabled,
  external,
  download,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  primary,
  outline,
  alert,
  plain,
  monochrome,
  removeUnderline,
  size = DEFAULT_SIZE,
  textAlign,
  fullWidth,
}): ReactElement => {
  const classes = `Button ${className ?? ""}`;

  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdownActive = useCallback(
    () => setDropdownActive((prev) => !prev),
    []
  );

  const isDisabled = disabled || loading;

  return (
    <div className="UrsaButton">
      <button
        name={name}
        type={`${submit ? "submit" : "button"}`}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        onPointerDown={onPointerDown}
        role={role ?? "button"}
      >
        {loading ? (
          <Spinner color="white" size="small" />
        ) : icon ? (
          icon
        ) : (
          children
        )}
      </button>
    </div>
  );
};

const Button = styled(UrsaButton)`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-weight: bold;
  text-transform: ${({ upper }) => (upper ? "uppercase" : "none")};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${({ disabled, alert }) =>
    disabled
      ? "rgb(203 213 225)"
      : alert
      ? "rgb(239 68 68)"
      : "rgb(20 184 166)"};
  background-color: ${({ disabled, outline, alert }) =>
    disabled
      ? "transparent"
      : outline
      ? "transparent"
      : alert
      ? "rgb(239 68 68)"
      : "rgb(20 184 166)"};
  color: ${({ outline, disabled }) =>
    disabled ? "rgb(203 213 225)" : outline ? "rgb(20 184 166)" : "white"};
  &:hover {
    color: "auto";
    background-color: ${({ disabled, outline, alert }) =>
      disabled || outline
        ? "transparent"
        : alert
        ? "rgb(220 38 38)"
        : "rgb(13 148 136)"};
    border-color: ${({ disabled, alert }) =>
      disabled
        ? "rgb(203 213 225)"
        : alert
        ? "rgb(220 38 38)"
        : "rgb(13 148 136)"};
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
    box-shadow: ${({ disabled, outline }) =>
      disabled || outline
        ? "none"
        : `0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)`};
  }
`;

export default Button;
