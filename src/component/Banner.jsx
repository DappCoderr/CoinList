import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-[400px] overflow-hidden group">
      {/* Banner Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1621413278134-ffa1d154a4b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          // alt="Crypto Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Track Your Favorite
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cryptocurrencies
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Real-time cryptocurrency prices, market trends, and portfolio
            tracking - all in one place.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white hover:border-blue-400 text-white hover:text-blue-400 rounded-lg font-semibold transition-all duration-300">
              Explore Coins
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 py-2">
        <div className="flex space-x-8 overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {["BTC", "ETH", "BNB", "XRP", "ADA", "SOL", "DOT"].map((coin) => (
              <span key={coin} className="text-white font-medium">
                {coin} <span className="text-green-400 ml-1">↑2.5%</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
