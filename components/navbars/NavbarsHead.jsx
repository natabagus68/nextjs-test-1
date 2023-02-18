import React from "react";

const NavbarsHead = () => {
  return (
    <>
      <div className="fixed z-[998]">
        <div className="   w-full h-1 bg-gradient-to-r from-yellow-500 to-blue-500"></div>
        <nav className=" w-screen flex items-center justify-center py-2  bg-black ">
          <section className="w-[90%] flex justify-around ">
            {/* logo */}
            <div className="flex relative top-[20px] ">
              {/* text logo */}
              <div className="text-white text-center ">
                <h1 className="font-bold text-2xl text-pink-500 font-bebas">
                  INDONESIA
                </h1>
                <h1 className="font-bold text-2xl text-green-300 font-bebas ">
                  COMIC ON
                </h1>
                <p className="flex font-sans text-[12px] text-gray-300">
                  Presented By
                  <img
                    className="relative z-[2] bottom-2"
                    src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg"
                    width={50}
                    alt=""
                  />
                  Shop
                </p>
              </div>
              {/* logo img */}
              <div>
                <div className="z-[-1]  w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full " />
                <div className="z-[-1]  w-8 h-8 bg-yellow-200 rounded-full " />

                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/unleash-chibi.2a778f5.webp"
                  alt=""
                  width={40}
                  className="z-10 relative top-[-60px]"
                />
              </div>
              <div>
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/unleash-text.3976f27.webp"
                  alt=""
                  width={100}
                />
              </div>
              {/* end logo */}

              {/* list navigation */}
              <div className="hidden h-full sm:flex ml-20 mr-20 pb-8">
                <ul className="flex gap-3 text-white m-auto font-sans cursor-pointer">
                  <li className="p-6 rounded-md hover:bg-gray-900">home</li>
                  <li className="p-6 rounded-md hover:bg-gray-900">
                    Guest Stars
                  </li>
                  <li className="p-6 rounded-md hover:bg-gray-900">Brands</li>
                  <li className="p-6 rounded-md hover:bg-gray-900">Contact</li>
                  <li className="p-6 rounded-md hover:bg-gray-900">More</li>
                </ul>
              </div>
              {/* end list navigation */}

              <div className=" h-full text-center flex pb-8">
                <button className="p-4 rounded-md bg-pink-600 hover:bg-pink-900 text-white m-auto font-bold ">
                  Get Your Tiket
                </button>
              </div>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
};

export default NavbarsHead;
