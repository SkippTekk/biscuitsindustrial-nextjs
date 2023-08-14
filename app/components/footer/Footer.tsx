"use client";
import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import useSWR from "swr";
const Footer = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://esi.evetech.net/latest/status/?datasource=tranquility",
    fetcher,
    { refreshInterval: 60000 }
  );
  if (error) return <div>Failed to load....</div>;
  if (isLoading) return <div>Loading Build Data....</div>;

  console.log(data);
  return (
    <div className={style.container}>
      <div>
        Biscuits Industrial. Proper Footer will be created at some point.
      </div>
      Players Playing: {data.players} - Server Version: {data.server_version}
      <div className={style.img}>
        <Image
          src="/BiscuityBotIcon.png"
          width={20}
          height={20}
          alt="Biscuits Industrial"
        />
        <Image
          src="/discord-mark-blue.svg"
          width={20}
          height={20}
          alt="Discord Link"
        />
      </div>
    </div>
  );
};

export default Footer;
