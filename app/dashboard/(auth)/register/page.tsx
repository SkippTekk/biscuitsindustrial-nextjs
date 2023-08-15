"use client";
import React, { useState, useRef } from "react";
import style from "./page.module.css";
import Link from "next/link";
import PasswordChecklist from "react-password-checklist";
import { ToastContainer } from "react-toastify";
import {
  successToast,
  errorToast,
} from "@components/biscuit-toasts/biscuit-toasts";

const Login = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const [getPassword, setPassword] = useState<string>("");
  const [getAccountCreated, setAccountCreated] = useState<boolean>(false);

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userCreds: UserCredentials = {
      username: username.current?.value.toLowerCase(),
      email: email.current?.value.toLowerCase(),
      password: getPassword,
    };

    try {
      await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCreds),
        credentials: "include",
      })
        .then(() => {
          successToast(`Please check your email for verification link.`);
          setAccountCreated(true);
        })
        .catch((err) => {
          if (err.status === 502) {
            errorToast("Account is already registered!");
          }
          if (err.status === 500) {
            errorToast("Sorry! Server is unavailable. Please try again later.");
          }
        });
    } catch (err) {
      errorToast("Unable to communicate with server.");
    }
  };

  const handlePassword = (arg: string): void => {
    setPassword(arg);
  };

  return (
    <>
      {!getAccountCreated && (
        <div className={style.container}>
          <h1>Sign up!</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              ref={username}
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className={style.input}
              minLength={4}
              maxLength={20}
              required
            />
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.input}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,19}"
              className={style.input}
              onChange={(e) => handlePassword(e.target.value)}
              required
            />
            <PasswordChecklist
              rules={[
                "minLength",
                "specialChar",
                "number",
                "capital",
                "maxLength",
              ]}
              minLength={7}
              maxLength={31}
              value={getPassword}
              messages={{
                minLength: "Minimum of 8 characters in length",
                specialChar: "At least 1 special character #?!@$ %^&*-",
                number: "At least 1 numeral",
                capital: "At least 1 capital letter",
                maxLength: "Under 32 characters in length",
              }}
            />
            <button className={style.btn}>Register</button>
          </form>
          <Link href="/dashboard/login">Got an account?</Link>
        </div>
      )}
      {getAccountCreated && (
        <div className={style.container}>
          <p className={style.created__text}>
            Account has been <u>created</u>!
          </p>
          <br />
          <br />
          <p>Please check your email for a verification link.</p>
          <br />
          <br />
          <Link href="/dashboard/login">
            <button className={style.btn}>Go to Login</button>
          </Link>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
