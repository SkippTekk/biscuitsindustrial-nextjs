import React from "react";
import style from "./page.module.css";
import useSWR from "swr";
import Image from "next/image";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data: build, error, isLoading } = useSWR("/ships/orca", fetcher);

  if (error) return <div>Failed to load....</div>;
  if (isLoading) return <div>Loading data....</div>;
  return (
    <div className={style.build}>
      <table>
        <thead>
          <th>Components</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {build.map(({ typeName, materialTypeID, quantity }) => {
            return (
              <tr>
                <td className={style.td}>
                  <Image
                    key={1}
                    src={`https://images.evetech.net/types/${materialTypeID}/icon`}
                    width={35}
                    height={35}
                    alt={typeName}
                  />
                  {typeName}
                </td>
                <td className={style.td}>{quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
