import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div
        className={`container h-screen w-auto flex flex-col items-center justify-center`}
      >
        <div className={`text-green-500 font-bold text-center text-9xl mb-10`}>
          500
        </div>
        <div className={`text-2xl`}>Danger, Will Robinson. Danger!</div>
        <Link href="/">
          <button
            className={`bg-green-400 rounded text-black font-bold p-3 mt-10`}
          >
            Go to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
