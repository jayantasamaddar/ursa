import { ReactNode, MouseEvent } from 'react';

export interface ModalHeaderProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  onClose?(): void;
}

export interface ModalFooterProps {
  children?: ReactNode;
  className?: string;
  primaryButton?: {
    name?: string;
    onClick?(event?: MouseEvent<HTMLButtonElement>): void;
  };
  secondaryButton?: {
    name?: string;
    onClick?(event?: MouseEvent<HTMLButtonElement>): void;
  };
}

export interface ModalProps extends ModalHeaderProps, ModalFooterProps {
  /** The content to display inside modal */
  children: ReactNode | ReactNode[];
  /** Classname attribute of the main modal container */
  className?: string;
  yPosition?: number;
  height?: number | string;
  width?: number | string;
  /** Replaces modal content with a spinner while a background action is being performed */
  loading?: boolean;
  /** Whether the modal is open or not */
  isOpen?: boolean;
  /** Callback when the modal is closed */
}
