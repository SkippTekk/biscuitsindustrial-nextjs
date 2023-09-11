"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@utils/fetcher";
import { ShipBuildContext } from "./context";
import ErrorPage from "@components/ErrorPage/ErrorPage";
import Loading from "@components/Loading/Loading";
import BuildingOptions from "@components/ShipDetails/BuildingOptions";
import ShipDetails from "@components/ShipDetails/ShipDetails";
import ShipMaterial from "@components/ShipDetails/ShipMaterial";
import BuildInstructions from "@components/ShipDetails/BuildInstructions";

const Ship = ({ params: { ship } }: { params: { ship: string } }) => {
  const { data, error, isLoading } = useSWR(
    `/api/ship/material/${ship}`,
    fetcher
  );

  if (error) return <ErrorPage />;
  if (isLoading) return <Loading />;

  return (
    <ShipBuildContext.Provider value={data}>
      <div
        className={`text-green-400 text-center font-bold text-7xl mt-10 mb-5`}
      >
        {data.ship[0].typeName}
      </div>
      <hr className={`w-full border border-solid border-slate-600`} />
      <div className={`mt-10 mb-10 grid grid-cols-3 gap-10`}>
        <ShipDetails />
        <div className={`text-center`}>
          <BuildingOptions />
          <hr className={`w-full border border-solid border-slate-600 mb-5`} />
          <ShipMaterial />
        </div>
        <BuildInstructions />
      </div>
    </ShipBuildContext.Provider>
  );
};

export default Ship;
