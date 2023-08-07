"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";

const ResetPassword = () => {
  const handlePasswordReset = (event) => {
    event.preventDefault();
    toast.success("Reset password sent via Email", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
