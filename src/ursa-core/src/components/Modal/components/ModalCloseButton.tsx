import React, { FC, ReactElement } from "react";
import styled from "@emotion/styled";

interface CloseButtonProps {
  onClick?: () => void;
}

const StyledModalCloseButton = styled.div(
  ({ theme }) => `
        position: fixed;
        right: 0;
        display: flex;
        justify-content: flex-end;
        background-color: #040C18;
        .UrsaModalCloseButton {
            cursor: pointer;
            padding: 20px;
            & > i {
                font-size: 2.5rem;
                cursor: pointer;
                &:hover {
                color: rgb(239 68 68);
                }
            }
        } 
    `
);

export const ModalCloseButton: FC<CloseButtonProps> = ({
  onClick,
}): ReactElement => {
  return (
    <StyledModalCloseButton className="UrsaModalClose">
      <span className="UrsaModalCloseButton" onClick={onClick}>
        <i className="fas fa-times"></i>
      </span>
    </StyledModalCloseButton>
  );
};
