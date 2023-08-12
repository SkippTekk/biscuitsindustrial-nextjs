"use client";
import React from "react";
import Navbar from "./navbar";
import Build from "./build";
import style from "./page.module.css";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Ships = () => {
  const { data: build, error, isLoading } = useSWR("/ships/orca", fetcher);

  if (error) return <div>Failed to load....</div>;
  if (isLoading) return <div>Loading data....</div>;
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.details}>Ship Details</div>
        <Build />
        <div className={style.right}> Ship Information</div>
      </div>
    </div>
  );
};

export default Ships;
