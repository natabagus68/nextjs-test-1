import React from "react";
import Cards from "./components/Cards";

const Rondown = () => {
  return (
    <>
      <div className=" py-[150px] flex flex-col justify-center">
        <h1 className="font-bold text-8xl text-white font-yusei text-center mb-10">
          Rundown
        </h1>
        <div className="w-[90%] flex flex-wrap gap-4 justify-start m-auto ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Rondown;
