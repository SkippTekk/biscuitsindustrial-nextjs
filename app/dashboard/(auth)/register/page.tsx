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
  const inputStyle = `text-white bg-neutral-900 h-8 border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-5 focus:outline-none`;

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
        <div
          className={`container h-screen w-screen flex flex-col items-center justify-center`}
        >
          <h1 className={`text-green-400 text-4xl mb-5 font-bold`}>Sign up!</h1>
          <form className={`flex flex-col w-1/4`} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              ref={username}
              type="text"
              id="username"
              name="username"
              className={inputStyle}
              minLength={4}
              maxLength={20}
              required
            />
            <label htmlFor="Email">Email</label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              className={inputStyle}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,19}"
              className={inputStyle}
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
            <button
              className={`bg-green-400 mt-5 h-10 text-black text-2xl font-bold mb-5 rounded`}
            >
              Register
            </button>
          </form>
          <Link href="/dashboard/login" className={`hover:text-green-400`}>
            Got an account?
          </Link>
        </div>
      )}
      {getAccountCreated && (
        <div
          className={`container h-screen w-screen flex flex-col items-center justify-center`}
        >
          <p className={`font-bold text-green-400 text-5xl`}>
            Account has been <u>created</u>!
          </p>
          <br />
          <br />
          <span className={`text-xl`}>
            Please check your email for a verification link.
          </span>
          <br />
          <br />
          <Link href="/dashboard/login">
            <button
              className={`bg-green-400 h-auto p-3 pr-5 pl-5 text-black text-2xl font-bold rounded`}
            >
              Login
            </button>
          </Link>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
