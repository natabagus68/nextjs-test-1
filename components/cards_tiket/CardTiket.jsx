import React from "react";
import Card from "./card/Card";

const CardTiket = () => {
  return (
    <>
      <div className="py-10 flex justify-center gap-8 bg-slate-900">
        <Card url="https://indonesiacomiccon.com/_nuxt/img/tiktok-shop-web-banner.4f6cf66.webp" />
        <Card url="https://indonesiacomiccon.com/_nuxt/img/oppal-web-banner.6a634e8.webp" />
      </div>
    </>
  );
};

export default CardTiket;
