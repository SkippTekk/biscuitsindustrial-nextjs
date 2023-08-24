"use client";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { errorToast } from "@components/biscuit-toasts/biscuit-toasts";
import { useRouter } from "next/navigation";
import { InputFormField } from "@components/Ui/InputFormField/InputFormField";
import { FormButton } from "@components/Ui/FormButton/FormButton";
import { TextUrlLink } from "@components/Ui/TextUrlLink/TextUrlLink";

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
      <div
        className={`container h-screen w-screen flex flex-col items-center justify-center`}
      >
        <h1 className={`text-green-400 text-4xl mb-5 font-bold`}>Sign in!</h1>
        <form className={`flex flex-col w-1/4`} onSubmit={handleSubmit}>
          <InputFormField
            fieldName="Username"
            fieldType="text"
            ref={userName}
          />
          <InputFormField
            fieldName="Password"
            fieldType="password"
            ref={userPass}
          />
          <FormButton>Login</FormButton>
        </form>
        <TextUrlLink href="/dashboard/register">Need an account?</TextUrlLink>
        <br />
        <TextUrlLink href="/dashboard/resetpassword">
          Forgot your password?
        </TextUrlLink>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
