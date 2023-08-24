import Link from "next/link";
import { signOut } from "next-auth/react";

export const TextUrlLink = (props) => {
  return (
    <>
      <Link
        className={`hover:text-green-400`}
        href={props.href}
        title={props.title}
        target={props.target}
        onClick={() => {
          if (props.signout) signOut({ callbackUrl: "/" });
        }}
      >
        {props.children}
      </Link>
    </>
  );
};
