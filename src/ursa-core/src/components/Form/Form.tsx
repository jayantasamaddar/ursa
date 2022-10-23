import React, {
  ReactElement,
  ReactNode,
  forwardRef,
  FormEvent,
  useCallback
} from 'react';
import styled from '@emotion/styled';

import { generateUniqueID, useTestId } from '../../utilities';
import { Invisible } from '../Invisible';

type Target = '_blank' | '_self' | '_parent' | '_top' | string;

export interface FormProps {
  /** The unique id attribute of the form */
  id?: string;
  /** Name attribute of the form */
  name?: string;
  /** The classname attribute of the form */
  className?: string;
  /** The form elements and any content to display inside the form */
  children?: ReactNode;
  /** The space-separated character encodings the server accepts */
  acceptCharset?: string;
  /** The URL that processes the form submission. */
  action?: string;
  /** Whether input elements can have their values automatically completed by the browser. */
  autoComplete?: 'on' | 'off';
  /** If the value of the method attribute is post, enctype is the MIME type of the form submission.
   *
   * Possible values: `application/x-www.form-urlencoded`, `multipart/form-data`, `text/plain`
   *
   * @default application/x-www.form-urlencoded
   *
   */
  encType?: string;
  /** Whether the form is validated before submission */
  noValidate?: boolean;
  /** Where to display the response after submitting the form */
  target?: Target;
  /** Whether the form submits on pressing Enter key */
  submitOnEnter?: boolean;
  /** The callback function on submission of a form */
  onSubmit(event: FormEvent<HTMLFormElement>): void;
}

const UrsaForm = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      id,
      name,
      className,
      children,
      autoComplete,
      acceptCharset,
      encType,
      target,
      action,
      noValidate,
      submitOnEnter,
      onSubmit
    },
    ref
  ): ReactElement => {
    const _id = id || generateUniqueID('Ursa-Form');
    const testid = useTestId('test-form');

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e);
      },
      [onSubmit]
    );

    const autoCompleteValue = !autoComplete
      ? undefined
      : autoComplete === 'off'
      ? 'off'
      : 'on';

    const submitButton = submitOnEnter ? (
      <Invisible>
        <button
          id={`${_id}-ImplicitSubmit`}
          type="submit"
          tabIndex={-1}
          aria-hidden="true"
        >
          Submit
        </button>
      </Invisible>
    ) : undefined;

    return (
      <form
        id={_id}
        name={name}
        className={`Ursa-Form ${className || ''}`}
        ref={ref}
        autoComplete={autoCompleteValue}
        encType={encType}
        action={action}
        target={target}
        acceptCharset={acceptCharset}
        noValidate={noValidate}
        onSubmit={handleSubmit}
        {...testid}
      >
        {submitButton}
        {children}
      </form>
    );
  }
);

export const Form = styled(UrsaForm)(
  ({ theme }) => `
    
  `
);
