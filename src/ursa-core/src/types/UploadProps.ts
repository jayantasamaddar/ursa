import { ChangeEvent } from 'react';

export interface UploadOptions {
  allowMultiple?: boolean;
  accept?: string;
}

export interface UploadButtonProps extends UploadOptions {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
