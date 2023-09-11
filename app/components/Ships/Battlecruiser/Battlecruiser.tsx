`use client`;
import React, { useState, useEffect } from "react";
import { BattlecruiserIcon } from "@components/Ui/ShipIcons/BattlecruiserIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Battlecruiser = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [command, setCommand] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(
      data.filter(
        (ship: ShipData) =>
          ship.groupID == 419 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 419 && ship.faction.includes("Navy")
      )
    );
    setCommand(data.filter((ship: ShipData) => ship.groupID == 540));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <BattlecruiserIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Battlecruiser
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
        {command?.length > 0 && (
          <ShipSection data={command} sectionName="Command" />
        )}
      </div>
    </>
  );
};

export default Battlecruiser;
