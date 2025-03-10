import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-64 overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://raw.githubusercontent.com/singhsanket143/Crypto-tracker/refs/heads/master/src/assets/banner1.jpeg"
        alt="Crypto Banner"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-3xl font-bold">
            List and Track all the coins
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
