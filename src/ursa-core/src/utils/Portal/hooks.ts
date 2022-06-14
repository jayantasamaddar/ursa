import { useContext } from "react";

import { PortalManagerContext } from "./context";

export const usePortalManager = () => {
  const PortalManager = useContext(PortalManagerContext);

  if (!PortalManager) {
    throw new Error("No Portal Manager provided.");
  }

  return PortalManager;
};
