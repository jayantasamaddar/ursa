import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../Button';

import { ModalFooterProps } from '../../../types';

const UrsaModalFooter: FC<ModalFooterProps> = ({
  primaryButton,
  secondaryButton,
  className
}): ReactElement | null => {
  return (
    <div className={`Ursa-Modal-Buttons ${className || ''}`}>
      {secondaryButton?.onClick && (
        <Button outline onClick={secondaryButton?.onClick}>
          {secondaryButton?.name || 'Cancel'}
        </Button>
      )}
      <Button primary onClick={primaryButton?.onClick}>
        {primaryButton?.name || 'Submit'}
      </Button>
    </div>
  );
};

export const ModalFooter = styled(UrsaModalFooter)(
  ({ theme: { color } }) => `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 20px;
    padding: 20px;
    bottom: 0;
    border-top: 1px solid ${color['--ursa-border-primary']};
    background-color: ${color['--ursa-bg-primary']};
    `
);
