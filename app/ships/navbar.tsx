import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR("/ships/faction", fetcher);

  if (error) return <div>Failed to load....</div>;
  if (isLoading) return <div>Loading data....</div>;
  return (
    <div className={style.navbar}>
      {data.map(({ factionName }) => {
        return <Link href="/ships/">{factionName}</Link>;
      })}
    </div>
  );
}
