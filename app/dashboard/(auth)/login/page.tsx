"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    signIn("credentials", { username, password });
  };

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={style.input}
          required
        />
        <input
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
  );
};

export default Login;
