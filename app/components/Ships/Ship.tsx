"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Ship {
  typeID: number;
  typeName: string;
}

const Ship = ({ typeID, typeName }: Ship) => {
  return (
    <Link href={`/ship/${typeName}`}>
      <div
        className={`pl-4 flex flex-row align-center items-center m-1`}
        key={typeName}
      >
        <Image
          src={`https://images.evetech.net/types/${typeID}/icon`}
          alt={typeName}
          width={50}
          height={50}
        />
        <span className={`ml-2`}>{typeName}</span>
      </div>
    </Link>
  );
};

export default Ship;
