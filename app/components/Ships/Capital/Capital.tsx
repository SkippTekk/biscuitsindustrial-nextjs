`use client`;
import React, { useState, useEffect } from "react";
import { TitanIcon } from "@components/Ui/ShipIcons/TitanIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Capital = ({ data }: ShipProps): JSX.Element => {
  const [dread, setDread] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [lancer, setLancer] = useState<ShipData[] | null>(null);
  const [carrier, setCarrier] = useState<ShipData[] | null>(null);
  const [supercarrier, setSupercarrier] = useState<ShipData[] | null>(null);
  const [titan, setTitan] = useState<ShipData[] | null>(null);
  const [capindy, setCapindy] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setDread(
      data.filter(
        (ship: ShipData) =>
          ship.groupID == 485 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 485 && ship.faction.includes("Navy")
      )
    );
    setLancer(data.filter((ship: ShipData) => ship.groupID == 4594));
    setCarrier(data.filter((ship: ShipData) => ship.groupID == 547));
    setSupercarrier(data.filter((ship: ShipData) => ship.groupID == 659));
    setTitan(data.filter((ship: ShipData) => ship.groupID == 30));
    setCapindy(data.filter((ship: ShipData) => ship.groupID == 883));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <TitanIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Capitals
            </span>
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <ChevronIcon
              className={`${collapse ? "rotate-180" : ""}`}
              width="40"
              height="40"
            />
          </button>
        </div>
      </div>
      <hr
        className={`w-full border border-solid border-slate-600 mt-5 ${
          collapse ? "mb-10" : ""
        }`}
      />
      <div className={`flex m-3 ${collapse ? "hidden" : ""}`}>
        {dread?.length > 0 && (
          <ShipSection data={dread} sectionName="Dreadnought" />
        )}
        {navy?.length > 0 && <ShipSection data={navy} sectionName="Navy" />}
        {lancer?.length > 0 && (
          <ShipSection data={lancer} sectionName="Lancer" />
        )}
        {carrier?.length > 0 && (
          <ShipSection data={carrier} sectionName="Carrier" />
        )}
        {supercarrier?.length > 0 && (
          <ShipSection data={supercarrier} sectionName="Super Carrier" />
        )}
        {titan?.length > 0 && <ShipSection data={titan} sectionName="Titan" />}
        {capindy?.length > 0 && (
          <ShipSection data={capindy} sectionName="Capital Industrial" />
        )}
      </div>
    </>
  );
};

export default Capital;
