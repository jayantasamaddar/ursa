import React, { FC, ReactElement, useRef, useContext } from 'react';
import styled from '@emotion/styled';

import { Portal } from '../Portal';
import { Icon } from '../Icon';
import {
  InfoMinor,
  AlertMinor,
  MobileCancelMajor
} from '@zenius-one/ursa-icons';

export interface ToastProps {
  content: string;
  onDismiss?: () => void;
  duration?: number;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const UrsaToast: FC<ToastProps> = ({
  content,
  onDismiss,
  className
}): ReactElement => {
  return (
    <Portal idPrefix="Ursa-Toast">
      <div className={`Ursa-ToastContainer ${className || ''}`}>{content}</div>
      {/* <Icon
        source={MobileCancelMajor}
        className="Ursa-ToastCloseButton"
        size="medium"
      /> */}
    </Portal>
  );
};

export const Toast = styled(UrsaToast)(
  ({ theme: { color }, duration }) => `
        background-color: ${color['--ursa-black']};
        color: ${color['--ursa-white']};
        border: 1px solid ${color['--ursa-text-primary']};
        border-radius: 4px;
        padding: 20px;
        width: 540px;
        text-align: center;
        margin: 0 auto;
    `
);
