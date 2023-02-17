import React from "react";

const Card = () => {
  return (
    <>
      <div class="card w-[18rem] h-[28rem] glass ">
        <figure>
          <img
            src="https://indonesiacomiccon.com/_nuxt/img/moona-1.a1efc26.webp"
            alt="car!"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">Life hack</h2>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">Vtuber</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
