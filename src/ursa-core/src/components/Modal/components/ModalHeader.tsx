import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { ModalHeaderProps } from '../../../types';
import { ModalCloseButton } from './ModalCloseButton';

const UrsaModalHeader: FC<ModalHeaderProps> = ({
  title,
  className,
  onClose
}): ReactElement => {
  return (
    <div className={`UrsaModalHeader ${className || ''}`}>
      {title && (
        <div className="UrsaModalHeader-title">
          <h2>{title}</h2>
        </div>
      )}
      <ModalCloseButton onClick={onClose} />
    </div>
  );
};

export const ModalHeader = styled(UrsaModalHeader)(
  ({ theme: { color } }) => `
      position: relative;
      display: flex;
      align-items: flex-start;
      flex-shrink: 0;
      background-color: ${color['--ursa-bg-primary']};
      padding-bottom: 1em;
      border-bottom: 1px solid ${color['--ursa-border-primary']};
  `
);
