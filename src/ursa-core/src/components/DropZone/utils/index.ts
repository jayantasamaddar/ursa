import React, { ChangeEvent } from 'react';

type DragEventProps = React.DragEvent<HTMLDivElement> | DragEvent;
type ChangeEventProps = ChangeEvent<HTMLInputElement>;
type DataTransferEventProps = ChangeEventProps | DragEventProps;
type AcceptedFiles = string | string[] | undefined;

const dragEvents = ['dragover', 'dragenter', 'drop'];

/* Prevent Default and Stop Event Propagation */
export const stopEvent = (event: DragEventProps) => {
  event.preventDefault();
  event.stopPropagation();
};

/***********************************************************************************/
// Verifications
/***********************************************************************************/

/* Verify if event is a drag event */
const isDragEvent = (event: DragEventProps) => {
  return dragEvents.indexOf(event.type) > 0;
};

/* Verify if event is a change event */
const isChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
  return Object.prototype.hasOwnProperty.call(event, 'target');
};

/* Verify if file is accepted */
export const isFileAccepted = (file: File, acceptedFiles: AcceptedFiles) => {
  if (file.type === 'application/x-moz-file') return true;

  if (file && acceptedFiles) {
    const fileName = file.name || '';
    const mimeType = file.type || '';
    const baseMimeType = mimeType.replace(/\/.*$/, '');
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.trim().split(',');

    /**
     * Workflow: Find if the file provided has an existing type in the acceptedFilesArray.
     * -----------------------------------------------------------------------------------
     * (1) if validType is an extension (i.e. starts with '.'), check if the fileName ends with it.
     * (2) else if validType ends with a mimeType like '/*' usually provided as 'image/*'
     * (3) For other cases (where validType doesn't start with '.' or end with '/*') check if,
     *     mimeType === validType
     */
    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (validType.startsWith('.')) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      } else if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
};

/***********************************************************************************/
// Get Data Transfer Files
/***********************************************************************************/
export const getDataTransferFiles = (event: DataTransferEventProps) => {
  if (
    isDragEvent(event as DragEventProps) &&
    (event as DragEventProps).dataTransfer
  ) {
    const data = (event as DragEventProps).dataTransfer;

    if (data?.files?.length) {
      return Array.from(data.files);
    } else if (data?.items?.length) {
      /**
       *
       *  Chrome is the only browser that allows to read the file list on drag events
       * and uses `items` instead of `files` in this case.
       *
       */
      return Array.from(data.items);
    }
  } else if (
    isChangeEvent(event as ChangeEventProps) &&
    (event as ChangeEventProps).target.files
  ) {
    // Return files from even when a file was selected from an upload dialog
    const { files } = (event as ChangeEventProps).target;
    return Array.from(files as FileList);
  }
  return [];
};
