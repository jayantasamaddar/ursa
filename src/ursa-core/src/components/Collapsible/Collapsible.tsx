import styled from '@emotion/styled';

import React, {
  FC,
  ReactNode,
  ReactElement,
  useState,
  useRef,
  useEffect
} from 'react';

export interface CollapsibleProps {
  /** Assign a unique ID to the collapsible.
   * For accessibility, pass this ID as the value of the triggering component’s aria-controls prop.
   */
  id: string;
  /** Toggle whether the collapsible is expanded or not. */
  open?: boolean;
  /** The content to display inside the collapsible. */
  children?: ReactNode;
  /** The classes applicable to the collapsible. */
  className?: string;
}

const UrsaCollapsible: FC<CollapsibleProps> = (props): ReactElement => {
  const { id, open, children, className } = props;

  const [isOpen, setIsOpen] = useState(open || false);
  const collapsibleRef = useRef<HTMLDivElement>(null);
  const content = isOpen ? children : null;

  return (
    <div
      className={`${className || ''}`}
      id={id}
      ref={collapsibleRef}
      aria-hidden={!open}
    >
      {content}
    </div>
  );
};

export const Collapsible = styled(UrsaCollapsible)(
  () => `
        padding-top: 0;
        padding-bottom: 0;
        max-height: 0;
        overflow: hidden;
        will-change: max-height;
        transition-property: max-height;
        transition-duration: 100ms;
        transition-timing-function: ease-out;
    `
);
