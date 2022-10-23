import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { MobileCancelMajor } from '@zenius-one/ursa-icons';
import { Icon } from '../../Icon';

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton = styled.button(
  ({ theme: { color } }) => `
        position: absolute;
        cursor: pointer;
        right: 0;
        display: flex;
        justify-content: flex-end;
        background: transparent;
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        color: ${color['--ursa-text-secondary']};
        transition: color 0.1s ease-in-out;
        font: inherit;
        text-align: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;       
        -moz-osx-font-smoothing: inherit; 
        -webkit-appearance: none;
        
        &:hover {
          color: ${color['--ursa-text-primary']};
        }
    `
);

export const ModalCloseButton: FC<CloseButtonProps> = ({
  onClick
}): ReactElement => {
  return (
    <CloseButton
      name="close-button"
      className="Ursa-ModalClose"
      role="button"
      onClick={onClick}
    >
      <Icon
        source={MobileCancelMajor}
        className="Ursa-ModalCloseButton"
        size="large"
      />
    </CloseButton>
  );
};
