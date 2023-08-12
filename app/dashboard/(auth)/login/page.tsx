"use client";
import React, { useRef } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { errorToast } from "@components/biscuit-toasts/biscuit-toasts";

const Login = () => {
  const userEmail = useRef<HTMLInputElement>(null);
  const userPass = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signIn("credentials", { userEmail, userPass })
        .then((res) => {
          console.log("res: ", res);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={style.container}>
        <h1>Login</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            ref={userEmail}
            type="text"
            placeholder="username"
            className={style.input}
            required
          />
          <input
            ref={userPass}
            type="password"
            placeholder="password"
            className={style.input}
            required
          />
          <button className={style.button}>Login</button>
        </form>
        <Link className={style.text__link} href="/dashboard/register">
          Need an account?
        </Link>
        <br />
        <Link className={style.text__link} href="/dashboard/resetpassword">
          Forgot your password?
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
