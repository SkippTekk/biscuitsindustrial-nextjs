`use client`;
import React, { useState, useEffect } from "react";
import { BattleshipIcon } from "@components/Ui/ShipIcons/BattleshipIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Battleship = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [blackops, setBlackops] = useState<ShipData[] | null>(null);
  const [marauder, setMarauder] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(
      data.filter(
        (ship: ShipData) => ship.groupID == 27 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 27 && ship.faction.includes("Navy")
      )
    );
    setBlackops(data.filter((ship: ShipData) => ship.groupID == 898));
    setMarauder(data.filter((ship: ShipData) => ship.groupID == 900));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <BattleshipIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Battleship
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
        {blackops?.length > 0 && (
          <ShipSection data={blackops} sectionName="Black Ops" />
        )}
        {marauder?.length > 0 && (
          <ShipSection data={marauder} sectionName="Marauder" />
        )}
      </div>
    </>
  );
};

export default Battleship;
