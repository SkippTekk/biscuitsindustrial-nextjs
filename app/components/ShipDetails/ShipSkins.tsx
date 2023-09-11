"use client";
import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@utils/fetcher";

const ShipSkins = ({ ship }: { ship: string }): JSX.Element => {
  const { data } = useSWR(`/api/ship/skins/${ship}`, fetcher);
  return (
    <>
      <span className={`text-green-400 font-bold mt-5 text-2xl mb-5`}>
        Available Skins:
      </span>
      <div className={`grid grid-cols-2`}>
        {data?.map((item) => {
          if (item.typeName.includes("SKIN")) {
            return (
              <p key={item.typeName}>
                <Link
                  href={`https://evemarketer.com/types/${item.typeID}`}
                  className={`hover:text-green-400`}
                  target="_blank"
                >
                  • {item.typeName.replace(ship, "").replace("SKIN", "")}
                </Link>
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

export default ShipSkins;
