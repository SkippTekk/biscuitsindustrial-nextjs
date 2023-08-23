"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./page.module.css";
import useSWR from "swr";

const Ships = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: navbar,
    error: nError,
    isLoading: nLoading,
  } = useSWR("/ships/faction", fetcher);
  const {
    data: build,
    error: bError,
    isLoading: bLoading,
  } = useSWR("/ships/orca", fetcher);
  const {
    data: info,
    error: iError,
    isLoading: iLoading,
  } = useSWR("ships/info/orca", fetcher);
  // const {
  //   data: insurance,
  //   error: isError,
  //   isLoading: isLoading,
  // } = useSWR(
  //   "https://esi.evetech.net/latest/insurance/prices/?datasource=tranquility&language=en",
  //   fetcher,
  //   { refreshInterval: 3600000 }
  // );

  if (bError) return <div>Failed to load....</div>;
  if (bLoading) return <div>Loading Build Data....</div>;
  if (nError) return <div>Failed to load....</div>;
  if (nLoading) return <div>Loading Navbar Data....</div>;
  if (iError) return <div>Failed to load....</div>;
  if (iLoading) return <div>Loading Information data</div>;
  // if (isError) return <div>Failed to load....</div>;
  // if (isLoading) return <div>Loading Information data</div>;

  return (
    // left area
    <div>
      <div>
        {navbar.map(({ factionName }) => {
          return (
            <Link href="/ships/" key={factionName} className={`border 2px`}>
              {factionName}
            </Link>
          );
        })}
      </div>
      <div className={`grid grid-cols-3 gap-2`}>
        <div className={`border 2px`}>
          <Image
            key={info[0].typeName}
            className={`w-1/2 h-auto`}
            src={`https://images.evetech.net/types/${info[0].typeID}/render`}
            alt="Ship Image goes Here, Mail SkippTekk or tweet @XGKIPPY for a fix"
            height={200}
            width={200}
          />
          Ship Values of the ship.
          <p>
            Ship Capacitor: {parseFloat(info[0].capacity).toLocaleString("en")}
          </p>
          <p>Volume: {parseFloat(info[0].volume).toLocaleString("en")}</p>
          <p>Mass: {parseFloat(info[0].mass).toLocaleString("en")}</p>
        </div>
        {/* Middle area */}
        <div className={`border 2px text-center`}>
          <div>
            Ship Selected: {info[0].typeName} - TypeID: {info[0].typeID}
          </div>
          <div className={`grid justify-items-stretch`}>
            <table className={`border-collapse border`}>
              <thead>
                <tr>
                  <th className={`border border-slate-600`}>Components</th>
                  <th className={`border border-slate-600`}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {build.map(({ typeName, materialTypeID, quantity }) => {
                  return (
                    <tr>
                      <td className={`border border-slate-700`}>
                        <Image
                          key={materialTypeID}
                          src={`https://images.evetech.net/types/${materialTypeID}/icon`}
                          width={35}
                          height={35}
                          alt={typeName}
                        />
                        {typeName}
                      </td>
                      <td className={`border border-slate-600`}>{quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* right area */}
        <div className={`border 2px`}>Build instructions?</div>
      </div>
    </div>
  );
};

export default Ships;
