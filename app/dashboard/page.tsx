"use client";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div
      className={`container h-screen w-screen flex flex-col items-center justify-center`}
    >
      Welcome {session?.user.username}
    </div>
  );
}
