import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import Rotation from "./components/Rotation";
const Hero = () => {
  return (
    <>
      <main className="relative h-screen flex flex-col items-center text-center justify-center py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            src="hero_assets/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full absolute object-cover"
            type="video/mp4"
          ></video>
        </div>
        {/* contents */}
        <div className="z-[997] h-full pt-[200px]">
          <span
            id="bringing-the-best"
            className="text-white font-bold text-8xl font-yusei"
          >
            Bringing the Best
          </span>
          <h3 class="text-white font-bold text-9xl font-yusei">Pop Culture </h3>
          <section className="flex pt-8 ">
            <div>
              <div className="bg-gray-400 w-32 h-32 rounded-full flex justify-center scale-[0.5]">
                <div className="bg-white w-28 h-28 rounded-full flex justify-center m-auto">
                  <div className="bg-yellow-500 w-20 h-20 rounded-full m-auto rotate-12 hover:scale-[2.5]">
                    <div className="flex justify-around mt-4">
                      <div className="bg-white w-5 h-5 rounded-full"></div>
                      <div className="bg-white w-5 h-5 rounded-full"></div>
                    </div>
                    <div className="bg-black w-7 h-9 rounded-full m-auto flex flex-col justify-center items-center ">
                      <div className="bg-red-500 w-6 h-6 rounded-full z-[997] relative top-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-tokyo text-white text-9xl">EXPERIENCE</h1>
              <div className="w-1/2 m-auto mt-4 mb-5">
                <p className="text-white text-xl">
                  Indonesia Comic Con is a platform to celebrate your love for
                  comics & pop culture art forms by creating experiences that
                  are original, exciting, and memorable, to
                </p>
              </div>

              <h1 className="font-bold font-changa text-6xl text-white">
                Oct 1-2,2022
              </h1>
              <p className="text-slate-400 text-xl mt-2">
                Jakarta Convention Center
              </p>
              <div className="mt-8">
                <button className="p-4 rounded-md bg-pink-600 hover:bg-pink-900 text-white m-auto font-bold text-2xl">
                  Get Your Tiket
                </button>
              </div>
            </div>
            <div className="w-32 animate-bounce pr-10">
              <img
                className="relative top-[250px] rotate-[300deg] scale-[1] "
                src="https://indonesiacomiccon.com/_nuxt/img/chibi-4.ab835d9.svg"
                width={200}
                alt="logo"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
