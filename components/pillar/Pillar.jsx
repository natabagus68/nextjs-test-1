import React from "react";
import Card from "./card/Card";

const pilar = () => {
  return (
    <div className="flex flex-col justify-center py-32 bg-slate-900">
      <p className="font-mono text-white text-center text-xl">
        The <b>biggest event</b> in a yearto celebrate
      </p>
      <h1 className="text-white font-bold font-yusei text-8xl text-center mb-10">
        5 pop culture's pillars
      </h1>

      <section className="flex justify-center  gap-5 m-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default pilar;
