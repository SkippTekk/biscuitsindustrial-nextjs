"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { successToast } from "@components/biscuit-toasts/biscuit-toasts";

const ResetPassword = () => {
  const inputStyle = `text-white bg-neutral-900 h-8 border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-5 focus:outline-none`;

  const handlePasswordReset = (
    event: React.MouseEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    // Reset Password Logic goes here... somewhere

    successToast("Reset password sent via Email");
  };

  return (
    <div>
      <div
        className={`container h-screen w-screen flex flex-col items-center justify-center`}
      >
        <h1 className={`text-green-400 text-4xl mb-5 font-bold`}>
          Reset Password
        </h1>
        <form className={`flex flex-col w-1/4`} onSubmit={handlePasswordReset}>
          <label htmlFor="username">Username</label>
          <input type="text" className={inputStyle} id="username" required />
          <button
            className={`bg-green-400 mt-5 h-10 text-black text-2xl font-bold mb-5 rounded`}
          >
            Send Email
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
          Know your password?
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
