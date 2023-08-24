"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import PasswordChecklist from "react-password-checklist";
import { ToastContainer } from "react-toastify";
import {
  successToast,
  errorToast,
} from "@components/biscuit-toasts/biscuit-toasts";
import { InputFormField } from "@components/Ui/InputFormField/InputFormField";
import { FormButton } from "@components/Ui/FormButton/FormButton";
import { TextUrlLink } from "@components/Ui/TextUrlLink/TextUrlLink";

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
        <div
          className={`container h-screen w-screen flex flex-col items-center justify-center`}
        >
          <h1 className={`text-green-400 text-4xl mb-5 font-bold`}>Sign up!</h1>
          <form className={`flex flex-col w-1/4`} onSubmit={handleSubmit}>
            <InputFormField
              input={{
                length: "4",
                maxLength: "20",
                id: "username",
              }}
              fieldType="text"
              fieldName="Username"
              ref={username}
            />
            <InputFormField
              input={{ required: true }}
              fieldType="email"
              fieldName="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,19}"
              className={`text-white bg-neutral-900 h-11 border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-5 focus:outline-none`}
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
            <FormButton>Register</FormButton>
          </form>
          <TextUrlLink href="/dashboard/login">Got an account?</TextUrlLink>
        </div>
      )}
      {getAccountCreated && (
        <div
          className={`container h-screen w-screen flex flex-col items-center justify-center`}
        >
          <p className={`font-bold text-green-400 text-5xl`}>
            Account has been <u className={`text-white`}>created</u>!
          </p>
          <br />
          <br />
          <span className={`text-xl`}>
            Please check your email for a verification link.
          </span>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
