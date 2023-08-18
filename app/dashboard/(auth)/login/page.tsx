"use client";
import React, { useRef } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { errorToast } from "@components/biscuit-toasts/biscuit-toasts";
import { useRouter } from "next/navigation";

const Login = () => {
  const userName = useRef<HTMLInputElement>(null);
  const userPass = useRef<HTMLInputElement>(null);
  const inputStyle = `text-white bg-neutral-900 h-8 border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-5 focus:outline-none`;
  const { push } = useRouter();

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signIn("credentials", {
        username: userName.current?.value.toLowerCase(),
        password: userPass.current?.value,
        redirect: false,
      }).then((res) => {
        if (res?.error !== null) {
          errorToast("Username or password are invalid.");
        } else {
          push("/dashboard");
          return;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={`container h-screen w-screen flex flex-col items-center justify-center`}
      >
        <h1 className={`text-green-400 text-4xl mb-5 font-bold`}>Sign in!</h1>
        <form className={`flex flex-col w-1/4`} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            ref={userName}
            type="text"
            className={inputStyle}
            id="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            ref={userPass}
            type="password"
            className={inputStyle}
            id="password"
            required
          />
          <button
            className={`bg-green-400 mt-5 h-10 text-black text-2xl font-bold mb-5 rounded`}
          >
            Login
          </button>
        </form>
        <Link className={`hover:text-green-400`} href="/dashboard/register">
          Need an account?
        </Link>
        <br />
        <Link
          className={`hover:text-green-400`}
          href="/dashboard/resetpassword"
        >
          Forgot your password?
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
