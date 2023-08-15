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
  } = useSWR("/ships/orca", fetcher);
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
      {navbar.map(({ factionName }) => {
        return (
          <Link href="/ships/" className={style.navbar}>
            {factionName}
          </Link>
        );
      })}
      <div className={style.container}>
        <div className={style.details}>
          Ship Details
          <Image
            className={style.img}
            src={`https://images.evetech.net/types/28606/render`}
            alt="Ship Image goes Here, Mail SkippTekk or tweet @XGKIPPY for a fix"
            height={200}
            width={200}
          />
        </div>
        {/* Middle area */}
        <div className={style.build}>
          <table>
            <tr>
              <th>Components</th>
              <th>Quantity</th>
            </tr>
            <tbody>
              {build.map(({ typeName, materialTypeID, quantity }) => {
                return (
                  <tr>
                    <td className={style.td}>
                      <Image
                        key={1}
                        src={`https://images.evetech.net/types/${materialTypeID}/icon`}
                        width={35}
                        height={35}
                        alt={typeName}
                      />
                      {typeName}
                    </td>
                    <td className={style.td}>{quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* right area */}
        <div className={style.right}> Ship Information</div>
      </div>
    </div>
  );
};

export default Ships;
