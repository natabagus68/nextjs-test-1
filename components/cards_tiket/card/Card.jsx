import React from "react";

const Card = ({ url }) => {
  return (
    <>
      <div className="">
        <img
          src={url}
          alt=""
          className="h-full w-[40rem] rounded-xl shadow-xl"
        />
      </div>
    </>
  );
};

export default Card;
