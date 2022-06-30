type AcceptedFiles = string | string[] | undefined;

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
  return false;
};
