import React, {
  FC,
  ReactNode,
  ReactElement,
  useId,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children?: ReactNode;
  idPrefix?: string;
}

export const Portal: FC<PortalProps> = ({
  children,
  idPrefix,
}): ReactElement | null => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let container = document.getElementById(idPrefix || "portal");
    if (!container) {
      // Create the portal container element using the id.
      container = document.createElement("div");
      container.id = idPrefix || "portal";
      document.body.appendChild(container);
    }

    container.appendChild(target.current);

    return () => {
      container.removeChild(target.current);
      if (container.childNodes.length === 0)
        document.body.removeChild(container);
    };
  }, [idPrefix]);

  const uniqueID = useId();
  const portalID =
    idPrefix?.length > 0 ? `${idPrefix}-${uniqueID}` : `portal-${uniqueID}`;

  if (!target.current) {
    target.current = document.createElement("div");
    target.current.id = portalID;
  }

  return createPortal(children, target.current);
};
