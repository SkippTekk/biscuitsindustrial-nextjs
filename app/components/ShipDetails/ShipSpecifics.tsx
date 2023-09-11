"use client";
import { useShipBuildContext } from "@shipBuildContext";
import React from "react";

const ShipSpecifics = (): JSX.Element => {
  const data = useShipBuildContext();
  return (
    <>
      <span className={`text-green-400 font-bold text-2xl mb-5`}>Details:</span>
      <table className={`w-full text-center`}>
        <tbody>
          <tr>
            <th>Capacitor</th>
            <td>
              {data.ship[0].capacity.toLocaleString("en")}{" "}
              <span className={`text-green-400`}>GW</span>
            </td>
          </tr>
          <tr>
            <th>Volume</th>
            <td>
              {data.ship[0].volume.toLocaleString("en")}{" "}
              <span className={`text-green-400`}>
                m<sup>3</sup>
              </span>
            </td>
          </tr>
          <tr>
            <th>Mass</th>
            <td>
              {data.ship[0].mass.toLocaleString("en")}{" "}
              <span className={`text-green-400`}>
                m<sup>3</sup>
              </span>
            </td>
          </tr>
          <tr>
            <th>Base Price</th>
            <td>
              {parseInt(data.ship[0].basePrice).toLocaleString("en")}{" "}
              <span className={`text-green-400`}>isk</span>
            </td>
          </tr>
          <tr>
            <th>Capacity</th>
            <td>
              {data.ship[0].capacity.toLocaleString("en")}{" "}
              <span className={`text-green-400`}>
                m<sup>3</sup>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShipSpecifics;
