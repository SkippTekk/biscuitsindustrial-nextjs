`use client`;
import React, { useState, useEffect } from "react";
import { CruiserIcon } from "@components/Ui/ShipIcons/CruiserIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Cruiser = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [recon, setRecon] = useState<ShipData[] | null>(null);
  const [heavy, setHeavy] = useState<ShipData[] | null>(null);
  const [interdiction, setInterdiction] = useState<ShipData[] | null>(null);
  const [logi, setLogi] = useState<ShipData[] | null>(null);
  const [strat, setStrat] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(
      data.filter(
        (ship: ShipData) => ship.groupID == 26 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 26 && ship.faction.includes("Navy")
      )
    );
    setRecon(data.filter((ship: ShipData) => ship.groupID == 833));
    setHeavy(data.filter((ship: ShipData) => ship.groupID == 358));
    setInterdiction(data.filter((ship: ShipData) => ship.groupID == 894));
    setLogi(data.filter((ship: ShipData) => ship.groupID == 832));
    setStrat(data.filter((ship: ShipData) => ship.groupID == 963));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <CruiserIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Cruiser
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
        {tech1?.length > 0 && <ShipSection data={tech1} sectionName="Tech 1" />}
        {navy?.length > 0 && <ShipSection data={navy} sectionName="Navy" />}
        {recon?.length > 0 && <ShipSection data={recon} sectionName="Recon" />}
        {heavy?.length > 0 && (
          <ShipSection data={heavy} sectionName="Heavy Assault" />
        )}
        {interdiction?.length > 0 && (
          <ShipSection data={interdiction} sectionName="Interdiction" />
        )}
        {logi?.length > 0 && (
          <ShipSection data={logi} sectionName="Logistics" />
        )}
        {strat?.length > 0 && (
          <ShipSection data={strat} sectionName="Strategic" />
        )}
      </div>
    </>
  );
};

export default Cruiser;
