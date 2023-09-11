import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "@utils/fetcher";

export const SearchBar = ({ input }: { input: { placeholder: string } }) => {
  const { data } = useSWR("/api/ship/allships", fetcher);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<string[] | undefined>(undefined);

  const handleSearchEntry = (e) => {
    setSearchTerm(e.target.value);
    const regex = new RegExp(searchTerm, "ig");
    let filteredList: { ship: string }[] = [];

    data.forEach((word) => {
      if (regex.test(word.ship)) {
        filteredList.push(word);
      }
    });

    //@ts-ignore
    setFiltered(filteredList);
  };

  return (
    <div className="relative">
      <input
        {...input}
        className={`text-white bg-neutral-900 h-11 w-full border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-1 focus:outline-none`}
        type="text"
        onChange={(e) => handleSearchEntry(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setTimeout(() => setFocus(false), 100)}
      />
      <div
        className={`h-fit max-h-80 absolute z-10 text-white bg-neutral-900 text-center text-xl w-full overflow-auto ${
          focus ? "visible" : "invisible"
        }`}
        onFocus={() => setFocus(true)}
      >
        <ul>
          {searchTerm !== "" &&
            filtered?.map((ship) => {
              return (
                <Link href={`/ship/${ship.ship}`}>
                  <li
                    key={ship.ship}
                    className={`hover:bg-neutral-700 hover:text-green-400 rounded`}
                    onFocus={() => setFocus(true)}
                  >
                    {ship.ship}
                  </li>
                </Link>
              );
            })}
          {searchTerm === "" &&
            data?.map((ship) => {
              return (
                <Link href={`/ship/${ship.ship}`}>
                  <li
                    key={ship.ship}
                    className={`hover:bg-neutral-700 hover:text-green-400 rounded`}
                  >
                    {ship.ship}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

// (ship) => {
//   return <li key={ship.ship}>{ship.ship}</li>;
// }
