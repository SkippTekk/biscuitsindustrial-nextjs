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
      <div className={style.container}>
        <h1>Login</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            ref={userName}
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
