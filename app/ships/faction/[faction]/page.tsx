"use client";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { fetcher } from "@utils/fetcher";
import ErrorPage from "@components/ErrorPage/ErrorPage";
import Loading from "@components/Loading/Loading";
import Frigate from "@components/Ships/Frigate/Frigate";
import Destroyer from "@components/Ships/Destroyer/Destroyer";
import Cruiser from "@components/Ships/Cruiser/Cruiser";
import Battlecruiser from "@components/Ships/Battlecruiser/Battlecruiser";
import Battleship from "@components/Ships/Battleship/Battleship";
import Capital from "@components/Ships/Capital/Capital";
import Industrial from "@components/Ships/Industrial/Industrial";
import Barge from "@components/Ships/Barge/Barge";

const factions = {
  Caldari: { name: "Caldari", id: 500001 },
  Minmatar: { name: "Minmatar", id: 500002 },
  Amarr: { name: "Amarr", id: 500003 },
  Gallente: { name: "Gallente", id: 500004 },
  Guristas: { name: "Guristas", id: 500010 },
  Angel: { name: "Angel", id: 500011 },
  Blood: { name: "Blood", id: 500012 },
  ORE: { name: "ORE", id: 500014 },
  Sisters: { name: "Sisters", id: 500016 },
  Mordu: { name: "Mordu", id: 500018 },
  Sansha: { name: "Sansha", id: 500019 },
  Serpentis: { name: "Serpentis", id: 500020 },
  Triglavian: { name: "Triglavian", id: 500026 },
  EDENCOM: { name: "EDENCOM", id: 500027 },
};

const Ships = ({ params: { faction } }) => {
  const { data, error, isLoading } = useSWR(
    `/api/ship/allships/${faction}`,
    fetcher
  );

  if (error) return <ErrorPage />;
  if (isLoading) return <Loading />;

  return (
    <div
      className={`container h-auto w-auto flex flex-col items-center justify-center mt-10 mb-10`}
    >
      <div className={`flex items-center mb-10`}>
        <Image
          height="100"
          width="150"
          src={`https://images.evetech.net/corporations/${factions[faction].id}/logo`}
        />
      </div>
      {data.some((item) => item.groupID === 25) && <Frigate data={data} />}
      {faction === "ORE" && <Barge data={data} />}
      {data.some((item) => item.groupID === 420) && <Destroyer data={data} />}
      {data.some((item) => item.groupID === 26) && <Cruiser data={data} />}
      {data.some((item) => item.groupID === 419) && (
        <Battlecruiser data={data} />
      )}
      {data.some((item) => item.groupID === 27) && <Battleship data={data} />}
      {data.some((item) => item.groupID === 485 || item.groupID === 883) && (
        <Capital data={data} />
      )}
      {data.some((item) => item.groupID === 28) && <Industrial data={data} />}
    </div>
  );
};

export default Ships;
