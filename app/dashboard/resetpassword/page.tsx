"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { successToast } from "@components/biscuit-toasts/biscuit-toasts";
import { InputFormField } from "@components/Ui/InputFormField/InputFormField";
import { FormButton } from "@components/Ui/FormButton/FormButton";
import { TextUrlLink } from "@components/Ui/TextUrlLink/TextUrlLink";

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
          <InputFormField
            input={{ required: true }}
            fieldName="Username"
            fieldType="text"
          />
          <FormButton>Send Email</FormButton>
        </form>
        <TextUrlLink href="/dashboard/register">Need an account?</TextUrlLink>
        <br />
        <TextUrlLink href="/dashboard/login">Know your password?</TextUrlLink>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
