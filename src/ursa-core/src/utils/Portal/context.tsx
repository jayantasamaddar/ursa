import { createContext } from "react";
import { PortalContainerElement } from "./types";

export interface PortalManager {
  container: PortalContainerElement;
}

export const PortalManagerContext = createContext<PortalManager | undefined>(
  undefined
);
