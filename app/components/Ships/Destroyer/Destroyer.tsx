`use client`;
import React, { useState, useEffect } from "react";
import { DestroyerIcon } from "@components/Ui/ShipIcons/DestroyerIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Destroyer = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [interdictor, setInterdictor] = useState<ShipData[] | null>(null);
  const [command, setCommand] = useState<ShipData[] | null>(null);
  const [tactical, setTactical] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(
      data.filter(
        (ship: ShipData) =>
          ship.groupID == 420 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 420 && ship.faction.includes("Navy")
      )
    );
    setInterdictor(data.filter((ship: ShipData) => ship.groupID == 541));
    setCommand(data.filter((ship: ShipData) => ship.groupID == 1534));
    setTactical(data.filter((ship: ShipData) => ship.groupID == 1305));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <DestroyerIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Destroyer
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
        {interdictor?.length > 0 && (
          <ShipSection data={interdictor} sectionName="Interdictor" />
        )}
        {command?.length > 0 && (
          <ShipSection data={command} sectionName="Command" />
        )}
        {tactical?.length > 0 && (
          <ShipSection data={tactical} sectionName="Tactical" />
        )}
      </div>
    </>
  );
};

export default Destroyer;
