"use client";
import React from "react";
import Image from "next/image";
import { useShipBuildContext } from "@shipBuildContext";

const ShipMaterial = (): JSX.Element => {
  const data = useShipBuildContext();

  return (
    <>
      <span className={`text-green-400 font-bold text-3xl text-center`}>
        Required Materials:
      </span>
      <div className={`grid justify-items-stretch mt-5`}>
        <table className={`border-collapse border border-slate-900 table-auto`}>
          <thead className={`bg-slate-800`}>
            <tr>
              <th>Components</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.material.map(
              ({ materialTypeID, quantity, typeName }: Material) => {
                return (
                  <tr key={typeName}>
                    <td
                      className={`border border-slate-900 flex flex-col items-center`}
                    >
                      <Image
                        key={materialTypeID}
                        src={`https://images.evetech.net/types/${materialTypeID}/icon`}
                        width={40}
                        height={40}
                        alt={typeName}
                      />
                      {typeName}
                    </td>
                    <td className={`border border-slate-900 text-green-400`}>
                      {quantity}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShipMaterial;
