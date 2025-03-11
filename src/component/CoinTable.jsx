import { useContext, useState } from "react";
import { fetchCoinData } from "../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../context/CurrencyContext";

function CoinTable() {
  const { currency } = useContext(CurrencyContext);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-2xl">
        Error: {error.message}
      </div>
    );
  }
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto">
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white flex py-4 px-6 font-semibold items-center justify-between rounded-t-xl shadow-lg">
        <div className="basis-[10%]">#</div>
        <div className="basis-[25%]">Coin</div>
        <div className="basis-[20%]">Price</div>
        <div className="basis-[20%]">24h Change</div>
        <div className="basis-[25%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-full shadow-lg rounded-b-xl overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        {data &&
          data.data.map((coin, index) => (
            <div
              key={coin.id}
              className="group w-full bg-white hover:bg-gray-50 text-gray-800 flex py-4 px-6 items-center justify-between cursor-pointer transition-all duration-300 border-b border-gray-100 last:border-0 hover:shadow-md hover:scale-[1.002]"
            >
              <div className="basis-[10%] text-gray-500 font-medium">
                {(page - 1) * 10 + index + 1}
              </div>
              <div className="flex items-center gap-4 basis-[25%]">
                <div className="w-10 h-10 rounded-full ring-2 ring-gray-100 overflow-hidden">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-800">{coin.name}</div>
                  <div className="text-sm text-gray-500">
                    {coin.symbol.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="basis-[20%] font-medium text-gray-700">
                {currency === "usd" ? "$" : "₹ "}
                {coin.current_price.toLocaleString()}
              </div>
              <div className="basis-[20%]">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                    coin.price_change_24h >= 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {coin.price_change_24h >= 0 ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {coin.price_change_24h.toFixed(2)}%
                </div>
              </div>
              <div className="basis-[25%] font-medium text-gray-700">
                {currency === "usd" ? "$" : "₹ "}
                {coin.market_cap.toLocaleString()}
              </div>
            </div>
          ))}
      </div>

      <div className="flex gap-4 justify-center items-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 hover:shadow-md transition-all duration-300"
        >
          Previous
        </button>
        <p className="text-gray-600 font-medium">Page {page}</p>
        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-md transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
