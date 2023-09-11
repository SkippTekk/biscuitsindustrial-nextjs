"use client";
import React from "react";
import Ship from "./Ship";

const ShipSection = ({ data, sectionName }: ShipProps): JSX.Element => {
  return (
    <div className={`flex flex-col w-max p-5`}>
      <span className={`text-green-400 font-bold text-xl text-center mb-3`}>
        {sectionName}
      </span>
      {data?.map((ship: ShipData) => {
        return (
          <Ship
            key={ship.typeName}
            typeID={ship.typeID}
            typeName={ship.typeName}
          />
        );
      })}
    </div>
  );
};

export default ShipSection;
