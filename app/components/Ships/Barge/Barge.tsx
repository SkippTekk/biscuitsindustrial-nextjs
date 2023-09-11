`use client`;
import React, { useState, useEffect } from "react";
import { FrigateIcon } from "@components/Ui/ShipIcons/FrigateIcon";
import ChevronIcon from "@components/Ui/Chevron/ChevronIcon";
import ShipSection from "../ShipSection";

const Barge = ({ data }: ShipProps): JSX.Element => {
  const [barge, setBarge] = useState<ShipData[] | null>(null);
  const [exhumer, setExhumer] = useState<ShipData[] | null>(null);
  const [collapse, setCollapse] = useState<boolean>(true);

  useEffect(() => {
    setBarge(data.filter((ship: ShipData) => ship.groupID == 463));
    setExhumer(data.filter((ship: ShipData) => ship.groupID == 543));
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
              Mining Barge
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
        {barge?.length > 0 && <ShipSection data={barge} sectionName="Barge" />}
        {exhumer?.length > 0 && (
          <ShipSection data={exhumer} sectionName="Exhumer" />
        )}
      </div>
    </>
  );
};

export default Barge;
