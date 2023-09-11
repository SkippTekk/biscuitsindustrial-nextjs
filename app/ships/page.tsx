"use client";
import React from "react";
import { SearchBar } from "@components/Ui/SearchBar/SearchBar";
import { ToastContainer } from "react-toastify";
import { fetcher } from "@utils/fetcher";
import useSWR from "swr";
import ErrorPage from "@components/ErrorPage/ErrorPage";
import Loading from "@components/Loading/Loading";
import Link from "next/link";

type FactionData = {
  factionName: string;
  shortName: string;
};

const Ships = () => {
  const {
    data: factionsData,
    error: factionsError,
    isLoading: factionsLoading,
  } = useSWR("/api/ship/factions", fetcher);

  if (factionsLoading) return <Loading />;
  if (factionsError) return <ErrorPage />;

  return (
    <>
      <div
        className={`container h-screen w-auto flex flex-col items-center justify-center`}
      >
        <div className={`flex flex-col w-1/2 m-20`}>
          <SearchBar input={{ placeholder: "Search for any ship..." }} />
        </div>
        <div
          className={`grid grid-cols-3 grid-rows-5 gap-5 place-content-center`}
        >
          {factionsData?.map(({ factionName, shortName }: FactionData) => (
            <div key={shortName}>
              <Link href={`/ships/faction/${shortName}`}>
                <button
                  className={`bg-green-400 rounded text-black font-bold w-48 h-14`}
                >
                  {factionName}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default Ships;
