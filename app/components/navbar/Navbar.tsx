"use client";
import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import image from "public/BiscuityBotIcon.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const links: Pages[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Ships",
    url: "/ships",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={`container w-screen justify-between flex mt-6`}>
      <div className={`w-60`}>
        <Link href="/">
          <Image
            className={`w-5 h-5 inline mr-3`}
            src={image}
            alt="Biscuity Bot Icon"
          />
          <span className={`text-xl`}>Biscuits Industrial</span>
        </Link>
      </div>
      <div className={`w-90 flex space-x-4`}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`hover:text-green-400`}
          >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" ? (
          <>
            <Link
              href="/dashboard"
              title="Your Dashboard"
              className={`hover:text-green-400`}
            >
              Dashboard
            </Link>
            <Link
              target="_blank"
              href={`https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=http://localhost:3000/api/auth/eveonline/callback&client_id=788e7bb100fb40bcab58c81c5cdece42&scope=publicData esi-skills.read_skills.v1 esi-contracts.read_character_contracts.v1&state=bIsCuItS`}
              title="Connect your Eve Account"
              className={`hover:text-green-400`}
            >
              Eve Connect
            </Link>
            <a
              href="#"
              onClick={() => signOut({ callbackUrl: "/" })}
              className={`hover:text-green-400`}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <Link
              key={"login"}
              href="/dashboard/login"
              title="Login"
              className={`hover:text-green-400`}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
