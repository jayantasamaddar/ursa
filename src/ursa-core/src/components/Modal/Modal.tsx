import React, { FC, ReactElement, MouseEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { ModalProps } from '../../types';

import { Portal } from '../Portal';
import { Spinner } from '../Spinner';
import { Backdrop } from '../Backdrop';
import { ModalHeader, ModalFooter } from './components';

const UrsaModal: FC<ModalProps> = ({
  title,
  className,
  children,
  primaryButton,
  secondaryButton = {},
  loading,
  isOpen,
  onClose
}): ReactElement | null => {
  /*********************************************************************************/
  // useEffect - Scrollbars
  /********************************************************************************/

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      if (document) {
        document.body.style.overflow = 'hidden';
        document.body.scroll = () => 'no';
      }
    }
    if (!isOpen && document) {
      document.body.style.overflow = 'auto';
      document.body.scroll = () => 'yes';
    }
  }, [isOpen]);

  /*********************************************************************************/
  // Render Modal JSX
  /********************************************************************************/
  if (!isOpen) return null;

  return (
    <Portal idPrefix="portal">
      <Backdrop />
      <div className={`Ursa-ModalContainer ${className || ''}`}>
        <div className="Ursa-Modal">
          <ModalHeader title={title} onClose={onClose} />

          {loading ? (
            <Spinner />
          ) : (
            <div className="Ursa-ModalContent">{children}</div>
          )}

          <ModalFooter
            primaryButton={primaryButton}
            secondaryButton={{ ...secondaryButton, onClick: onClose }}
          />
        </div>
      </div>
    </Portal>
  );
};

/*********************************************************************************/
// Render Styled Modal
/********************************************************************************/
export const Modal = styled(UrsaModal)(
  ({ theme: { color }, width, height, yPosition }) => `
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  color: ${color['--ursa-text-primary']};
    
  .Ursa-Modal {
    display: flex;
    flex-direction: column;
    background-color: ${color['--ursa-bg-primary']};
    border-radius: 3px;
    width: ${width || '80%'};
    height: ${height || '80%'};
    padding: 20px;
    box-shadow: 0 20px 25px -5px rgb(30 41 59 / 0.4), 0 8px 10px -6px rgb(30 41 59 / 0.4);
    border-radius: 10px;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    z-index: 9999;
  }
  .Ursa-ModalContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: ${yPosition || 'flex-start'};
    padding: 20px;
    background-color: ${color['--ursa-bg-primary']};
  }
  `
);
