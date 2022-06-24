import React, { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import { MobileCancelMajor } from "@zenius.one/ursa-icons";
import { Icon } from "../../Icon";

interface CloseButtonProps {
  onClick?: () => void;
}

const StyledModalCloseButton = styled.div(
  ({ theme }) => `
        position: absolute;
        cursor: pointer;
        right: 0;
        display: flex;
        justify-content: flex-end;        
    `
);

export const ModalCloseButton: FC<CloseButtonProps> = ({
  onClick,
}): ReactElement => {
  return (
    <StyledModalCloseButton className="Ursa-ModalClose" onClick={onClick}>
      <Icon
        source={MobileCancelMajor}
        className="Ursa-ModalCloseButton"
        size="large"
      />
    </StyledModalCloseButton>
  );
};
