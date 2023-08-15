"use client";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>Welcome {session?.user.username}</div>
  );
}
