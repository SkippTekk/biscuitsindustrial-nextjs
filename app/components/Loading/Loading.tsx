import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div
        className={`container h-screen w-auto flex items-center justify-center flex flex-col`}
      >
        <div className={`text-green-500 font-bold text-center text-7xl mb-10`}>
          Loading...
        </div>
        <div className={`mt-10`}>
          <BarLoader color="#4ade80" height={7} width={300} />
        </div>
      </div>
    </>
  );
};

export default Loading;
