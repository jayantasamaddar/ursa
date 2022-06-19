import React, { FC, ReactElement, MouseEvent } from "react";
import styled from "@emotion/styled";
import { TagProps } from "../../types";
import { MobileCancelMajor } from "@zenius/ursa-icons";
import { Icon } from "../Icon";

const UrsaTag: FC<TagProps> = ({
  name,
  className,
  onClick,
  onRemove,
}): ReactElement => {
  return (
    <div className={`UrsaTag ${className || ""}`} onClick={onClick}>
      <span className="UrsaTagName text-base">{name}</span>
      {onRemove && (
        <Icon
          className="Ursa-TagCloseButton"
          source={MobileCancelMajor}
          onClick={onRemove}
        />
      )}
    </div>
  );
};

export const Tag = styled(UrsaTag)(
  ({ theme: { color, fontSize, border } }) => `
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: ${fontSize["--ursa-font-size-1"]};
        padding: 10px 15px;
        background-color: ${color["--ursa-tag-bg-basic"]};
        color: ${color["--ursa-tag-text"]};
        border-radius: ${border["--ursa-border-radius-2xl"]};

        &:focus {
          outline: 1px solid ${color["--ursa-btn-primary"]};
        }

        .Ursa-TagCloseButton {
          & > svg {
            fill: ${color["--ursa-tag-text"]};
          }
        }
    `
);
