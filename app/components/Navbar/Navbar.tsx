"use client";
import Link from "next/link";
import React from "react";
import image from "public/BiscuityBotIcon.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { TextUrlLink } from "@components/Ui/TextUrlLink/TextUrlLink";

const links: Pages[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
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
          <span className={`text-green-500 font-bold text-xl`}>
            Biscuits Industrial
          </span>
        </Link>
      </div>
      <div className={`w-90 flex space-x-4`}>
        {links.map((link) => (
          <TextUrlLink key={link.title} href={link.url}>
            {link.title}
          </TextUrlLink>
        ))}
        {session.status === "authenticated" ? (
          <>
            <TextUrlLink href="/dashboard" title="Your Dashboard">
              Dashboard
            </TextUrlLink>
            <TextUrlLink
              target="_blank"
              href={`https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=http://localhost:3000/api/auth/eveonline/callback&client_id=788e7bb100fb40bcab58c81c5cdece42&scope=publicData esi-skills.read_skills.v1 esi-contracts.read_character_contracts.v1&state=bIsCuItS`}
              title="Connect your Eve Account"
            >
              Eve Connect
            </TextUrlLink>
            <TextUrlLink href="#" signout="true">
              Logout
            </TextUrlLink>
          </>
        ) : (
          <>
            <TextUrlLink href="/dashboard/login" title="Login">
              Login
            </TextUrlLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
