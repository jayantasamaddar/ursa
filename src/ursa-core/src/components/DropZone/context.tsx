import React, { createContext } from 'react';

interface DropZoneContextProps {
  disabled: boolean;
  inFocus: boolean;
  allowMultiple: boolean;
  size: string;
  type: string;
}

export const DropZoneContext = createContext<DropZoneContextProps>({
  disabled: false,
  inFocus: false,
  size: 'extraLarge',
  type: 'file',
  allowMultiple: true
});
