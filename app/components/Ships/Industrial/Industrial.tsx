`use client`;
import React, { useState, useEffect } from "react";
import { IndustrialIcon } from "@components/Ui/ShipIcons/IndustrialIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Industrial = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [deep, setDeep] = useState<ShipData[] | null>(null);
  const [blockade, setBlockade] = useState<ShipData[] | null>(null);
  const [freighter, setFreighter] = useState<ShipData[] | null>(null);
  const [jump, setJump] = useState<ShipData[] | null>(null);
  const [commindy, setCommindy] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(data.filter((ship: ShipData) => ship.groupID == 28));
    setDeep(data.filter((ship: ShipData) => ship.groupID == 380));
    setBlockade(data.filter((ship: ShipData) => ship.groupID == 1202));
    setFreighter(
      data.filter(
        (ship: ShipData) => ship.groupID == 4594 || ship.groupID == 513
      )
    );
    setJump(data.filter((ship: ShipData) => ship.groupID == 902));
    setCommindy(data.filter((ship: ShipData) => ship.groupID == 941));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <IndustrialIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Industrial
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
        {blockade?.length > 0 && (
          <ShipSection data={blockade} sectionName="Blockade Runner" />
        )}
        {deep?.length > 0 && (
          <ShipSection data={deep} sectionName="Deep Space" />
        )}
        {freighter?.length > 0 && (
          <ShipSection data={freighter} sectionName="Freighter" />
        )}
        {jump?.length > 0 && (
          <ShipSection data={jump} sectionName="Jump Freighter" />
        )}
        {commindy?.length > 0 && (
          <ShipSection data={commindy} sectionName="Industrial Command" />
        )}
      </div>
    </>
  );
};

export default Industrial;
