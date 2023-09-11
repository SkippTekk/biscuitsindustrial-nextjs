import { createContext, useContext } from "react";

export const ShipBuildContext = createContext<ShipBuildMaterial | undefined>(
  undefined
);

export const useShipBuildContext = () => {
  const shipBuildData = useContext(ShipBuildContext);

  if (shipBuildData === undefined) {
    throw new Error("useShipBuildContext must be used with a ShipBuildContext");
  }

  return shipBuildData;
};
