"use client";
import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
const Footer = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://esi.evetech.net/latest/status/?datasource=tranquility",
    fetcher,
    { refreshInterval: 31000 }
  );
  if (error) return <div>Failed to load....</div>;
  if (isLoading) return <div>Loading Build Data....</div>;

  console.log(data);
  return (
    <div className={style.container}>
      <div>
        Biscuits Industrial. Proper Footer will be created at some point.
      </div>
      [{parseFloat(data.players).toLocaleString("en")} Players]
      <div className={style.img}>
        <Image
          src="/BiscuityBotIcon.png"
          width={20}
          height={20}
          alt="Biscuits Industrial"
        />
        <Link href="https://discord.gg/kksqmuu" target="__blank">
          <Image
            src="/discord-mark-blue.svg"
            width={20}
            height={20}
            alt="Discord Link"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
