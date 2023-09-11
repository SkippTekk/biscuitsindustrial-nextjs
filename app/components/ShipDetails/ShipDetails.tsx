"use client";
import React from "react";
import Image from "next/image";
import ShipSkins from "./ShipSkins";
import ShipSpecifics from "./ShipSpecifics";
import { useShipBuildContext } from "@shipBuildContext";

const ShipDetails = (): JSX.Element => {
  const data = useShipBuildContext();

  return (
    <div className={`flex flex-col items-center`}>
      <Image
        key={data.ship[0].typeName}
        className={`w-1/2 h-auto mb-5`}
        src={`https://images.evetech.net/types/${data.ship[0].typeID}/render`}
        alt="Ship Image goes Here, Mail SkippTekk or tweet @XGKIPPY for a fix"
        height={200}
        width={200}
      />
      <div className={`text-green-400 font-bold text-2xl mb-5`}>
        Description:
      </div>
      <div className={`text-center`}>
        {data.ship[0].description?.replace(/<[a-z]{1,}>|<\/[a-z]{1}>/gi, "")}
      </div>
      <hr className={`w-full border border-solid border-slate-600 mt-5 mb-5`} />
      <ShipSpecifics />
      <hr className={`w-full border border-solid border-slate-600 mt-5 mb-5`} />
      <ShipSkins ship={data.ship[0].typeName} />
    </div>
  );
};

export default ShipDetails;
