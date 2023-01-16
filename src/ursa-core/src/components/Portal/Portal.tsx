import React, {
  ReactNode,
  ReactElement,
  useId,
  useRef,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children?: ReactNode;
  idPrefix?: string;
}

export const Portal = ({
  children,
  idPrefix
}: PortalProps): ReactElement | null => {
  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let container = document.getElementById(idPrefix || 'portal');
    if (!container) {
      // Create the portal container element using the id.
      container = document.createElement('div');
      container.id = idPrefix || 'portal';
      document.body.appendChild(container);
    }

    if (target.current) container.appendChild(target.current);

    return () => {
      if (container?.childNodes.length) {
        if (target.current) container.removeChild(target.current);
        document.body.removeChild(container);
      }
    };
  }, [idPrefix]);

  const uniqueID = useId();
  const portalID =
    (idPrefix as string)?.length > 0
      ? `${idPrefix}-${uniqueID}`
      : `portal-${uniqueID}`;

  if (!target.current) {
    target.current = document.createElement('div');
    target.current.id = portalID;
  }

  return createPortal(children, target.current);
};
