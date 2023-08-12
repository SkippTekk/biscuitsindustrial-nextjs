"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { successToast } from "@components/biscuit-toasts/biscuit-toasts";

const ResetPassword = () => {
  const handlePasswordReset = (
    event: React.MouseEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    // Reset Password Logic goes here... somewhere

    successToast("Reset password sent via Email");
  };

  return (
    <div>
      <div className={style.container}>
        <h1>Reset Password</h1>
        <form className={style.form} onSubmit={handlePasswordReset}>
          <input
            type="text"
            placeholder="username"
            className={style.input}
            required
          />
          <button className={style.button}>Reset Password</button>
        </form>
        <Link className={style.text__link} href="/dashboard/register">
          Need an account?
        </Link>
        <br />
        <Link className={style.text__link} href="/dashboard/resetpassword">
          Remembered your password?
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
