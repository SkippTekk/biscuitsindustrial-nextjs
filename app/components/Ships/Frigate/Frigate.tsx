`use client`;
import React, { useState, useEffect } from "react";
import { FrigateIcon } from "@components/Ui/ShipIcons/FrigateIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Frigate = ({ data }: ShipProps): JSX.Element => {
  const [tech1, setTech1] = useState<ShipData[] | null>(null);
  const [navy, setNavy] = useState<ShipData[] | null>(null);
  const [interceptor, setInterceptor] = useState<ShipData[] | null>(null);
  const [assault, setAssault] = useState<ShipData[] | null>(null);
  const [covert, setCovert] = useState<ShipData[] | null>(null);
  const [elec, setElec] = useState<ShipData[] | null>(null);
  const [logi, setLogi] = useState<ShipData[] | null>(null);
  const [exp, setExp] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setTech1(
      data.filter(
        (ship: ShipData) => ship.groupID == 25 && !ship.faction.includes("Navy")
      )
    );
    setNavy(
      data.filter(
        (ship: ShipData) => ship.groupID == 25 && ship.faction.includes("Navy")
      )
    );
    setInterceptor(data.filter((ship: ShipData) => ship.groupID == 831));
    setAssault(data.filter((ship: ShipData) => ship.groupID == 324));
    setCovert(data.filter((ship: ShipData) => ship.groupID == 830));
    setLogi(data.filter((ship: ShipData) => ship.groupID == 1527));
    setElec(data.filter((ship: ShipData) => ship.groupID == 893));
    setExp(data.filter((ship: ShipData) => ship.groupID == 1283));
  }, [data]);

  return (
    <>
      <div className={`flex items-center justify-between w-full`}>
        <div>
          <FrigateIcon width="30" height="30" />
        </div>
        <div>
          <button
            onClick={() => {
              setCollapse((collapse) => !collapse);
            }}
          >
            <span className={`text-green-400 font-bold text-4xl ml-3`}>
              Frigate
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
        {interceptor?.length > 0 && (
          <ShipSection data={interceptor} sectionName="Interceptor" />
        )}
        {assault?.length > 0 && (
          <ShipSection data={assault} sectionName="Assault" />
        )}
        {covert?.length > 0 && (
          <ShipSection data={covert} sectionName="Covert Ops" />
        )}
        {logi?.length > 0 && (
          <ShipSection data={elec} sectionName="Electronic Attack" />
        )}
        {elec?.length > 0 && (
          <ShipSection data={logi} sectionName="Logistics" />
        )}
        {exp?.length > 0 && <ShipSection data={exp} sectionName="Expedition" />}
      </div>
    </>
  );
};

export default Frigate;
