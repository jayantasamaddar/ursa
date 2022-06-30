import React, {
  FC,
  ReactElement,
  DragEvent,
  MouseEvent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
  ReactNode
} from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Invisible } from '../Invisible';
import { stopEvent, getDataTransferFiles, isFileAccepted } from './utils';
import { UploadMajor } from '@zenius-one/ursa-icons';
import { DropZoneContext } from './context';
import styled from '@emotion/styled';

import { UploadOptions } from '../../types';

export type DropZoneFileType = 'file' | 'image' | 'video';

export interface FileUpload {
  file_id: string;
  name: string;
  size: number;
  type: string;
  ext: string;
  url: string;
  progress: number;
  metadata?: {
    [key: string]: any;
  };
}

export interface DropZoneProps extends UploadOptions {
  label?: string | ReactNode;
  disabled?: boolean;
  className?: string;
  children?: string | ReactNode;
  type?: DropZoneFileType;
  /** Adds provision to add custom validations */
  customValidator?: (file: File) => boolean;
  /** Callback triggered on click */
  onClick?: () => void;
  /** Callback triggered on any file drop */
  onDrop?(files: File[], acceptedFiles: File[], rejectedFiles: File[]): void;
  /** Callback triggered when at least one of the files dropped was accepted */
  onDropAccepted?(acceptedFiles: File[]): void;
  /** Callback triggered when at least one of the files dropped was rejected */
  onDropRejected?(rejectedFiles: File[]): void;
  /** Callback triggered when one or more files are dragging over the drag area */
  onDragOver?: () => void;
  /** Callback triggered when one or more files entered the drag area */
  onDragEnter?: () => void;
  /** Callback triggered when one or more files left the drag area */
  onDragLeave?: () => void;
}

const UrsaDropZone: FC<DropZoneProps> = ({
  label,
  allowMultiple = true,
  disabled = false,
  accept,
  type = 'file',
  customValidator,
  onClick,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
  onDropAccepted,
  onDropRejected,
  children,
  className
}): ReactElement => {
  /**********************************************************************************/
  // Initialize Variables, State and Ref
  /**********************************************************************************/

  const [files, setFiles] = useState<FileUpload[]>([]);
  // const { files, dispatch } = useContext(FilesContext);
  const [dragAreaActive, setDragAreaActive] = useState(false);

  const uploadBtnRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   console.log(uploadBtnRef.current);

  //   return;
  // }, [uploadBtnRef]);

  /**********************************************************************************/
  // Helpers
  /**********************************************************************************/
  const getValidatedFiles = useCallback(
    (files: File[] | DataTransferItem[]) => {
      /**
       * Workflow: Validate Files and return three arrays: files, acceptedFiles, rejectedFiles
       * -------------------------------------------------------------------------------------
       * (1) Validate Files against accepted files and/or custom validation (if any)
       * (2) 'allowMultiple' check. If not, then only accept the first file, reject the rest.
       * (3) return {files, acceptedFiles, rejectedFiles}.
       */
      const acceptedFiles: File[] = [];
      const rejectedFiles: File[] = [];

      /* Push files to either the acceptedFiles or rejectedFiles arrays. */
      Array.from(files as File[]).forEach((file) => {
        !isFileAccepted(file, accept) ||
        (customValidator && !customValidator(file))
          ? rejectedFiles.push(file)
          : acceptedFiles.push(file);
      });

      /* allowMultiple check */
      if (!allowMultiple) {
        const rejected = acceptedFiles.splice(1);
        rejectedFiles.push(...rejected);
      }

      return { files, acceptedFiles, rejectedFiles };
    },
    [accept, customValidator, allowMultiple]
  );

  /**********************************************************************************/
  // Event Handlers
  /**********************************************************************************/

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    // Enable click to Upload
    onClick ? onClick() : uploadBtnRef.current?.click();
  };

  const handleDragEnter = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      stopEvent(event);
      if (disabled) return;
      onDragEnter && onDragEnter();
    },
    [disabled, onDragEnter]
  );

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (disabled) return;
      setDragAreaActive(true);
      onDragOver && onDragOver();
    },
    [disabled, onDragOver]
  );

  const handleDragLeave = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragAreaActive(false);
      onDragLeave && onDragLeave();
    },
    [disabled, onDragLeave]
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>) => {
      /**
       * Workflow
       * ---------
       * (1) Stop Event manually. (Prevent Default, Stop Propagation)
       * (2) 'disabled' check.
       * (3) Get an Array of Files or DataTransferItems
       * (4) Validate Files by running a getValidatedFiles function that returns three arrays:-
       *    a) files, b) acceptedFiles, c) rejectedFiles
       * (5) setDragAreaActive to false
       * (6) Check and execute the onDrop, onDropAccepted, onDropRejected functions
       */

      stopEvent(event as DragEvent<HTMLDivElement>);
      if (disabled) return;

      const fileList = getDataTransferFiles(event);
      const { files, acceptedFiles, rejectedFiles } =
        getValidatedFiles(fileList);

      setDragAreaActive(false);
      onDrop && onDrop(files as File[], acceptedFiles, rejectedFiles);
      onDropAccepted && acceptedFiles.length && onDropAccepted(acceptedFiles);
      onDropRejected && rejectedFiles.length && onDropRejected(rejectedFiles);
    },
    [disabled, getValidatedFiles, onDrop, onDropAccepted, onDropRejected]
  );

  //   const context = useMemo(
  //     () => ({
  //       disabled,
  //       inFocus,
  //       size,
  //       type,
  //       allowMultiple
  //     }),
  //     [disabled, inFocus, measuring, size, type, allowMultiple]
  //   );

  const uploadOptions = {
    allowMultiple,
    accept,
    onChange: handleDrop
  };

  const classes = `${className || ''} ${
    dragAreaActive ? 'drag-active' : 'drag-inactive'
  }`;

  /**********************************************************************************/
  // Return JSX
  /**********************************************************************************/

  return (
    <div
      className={`Ursa-DropZone ${classes}`}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="Ursa-DropZoneHeader">
        <Icon source={UploadMajor} size="large" />
        <p className="Ursa-DropZoneHeaderTitle">{label}</p>
      </div>
      <div className="Ursa-DropZoneBody">
        <Invisible>
          {/* @ts-ignore */}
          <Button ref={uploadBtnRef} upload uploadOptions={uploadOptions}>
            Browse
          </Button>
        </Invisible>
        {children}
      </div>
      {/* <div className="Ursa-ProgressBar flex flex-col justify-center items-center gap-10">
          {files.map((file) => (
            <div
              key={file.name}
              className="Ursa-ProgressBar-Item flex items-center gap-10"
            >
              <p className="Ursa-Text text-base">{file.name}</p>
              <p className="Ursa-Text text-base">{file.progress}%</p>
            </div>
          ))}
        </div> */}
    </div>
  );
};

/**********************************************************************************/
// Styled Component: DropZone
/**********************************************************************************/

export const DropZone = styled(UrsaDropZone)(
  ({ theme: { color, fontSize } }) => `
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-style: dashed;
        border-radius: 0.75em;
        min-height: 100%;
        padding: 20px;

        &.drag-inactive {
          border-color: ${color['--ursa-text-secondary']};
        }

        &.drag-active, &:hover {
            border-color: ${color['--ursa-text-primary']};
        }

        .Ursa-DropZoneHeader {
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            align-items: center;

            .Ursa-DropZoneHeaderTitle {
                text-align: center;
                font-size: ${fontSize['--ursa-font-size-10']};
            }
        }

        .Ursa-DropZoneBody {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            .Ursa-DropZoneHelperText {
                display: flex;
                gap: 20px;
                padding-left: 4px;
                padding-right: 4px;

                & > span {
                    font-size: ${fontSize['--ursa-font-size-3']};
                }
            }
        }        
    `
);
