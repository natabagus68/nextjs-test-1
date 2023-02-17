import React from "react";
import Card from "./components/Card";

const GuestStar = () => {
  return (
    <>
      <div className="h-screen py-[150px] flex flex-col justify-center">
        <h1 className="text-center font-bold font-yusei text-8xl text-white mb-5">
          Guest Star
        </h1>

        <div class="carousel carousel-center rounded-box w-[90%] m-auto gap-3">
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
          <div class="carousel-item">
            <Card />
          </div>
        </div>

        <button className="py-3 px-4 rounded-full bg-slate-700 text-white m-auto mt-11">
          View All
        </button>
      </div>
    </>
  );
};

export default GuestStar;
