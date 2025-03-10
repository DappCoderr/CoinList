import { useState, useEffect } from "react";
import { fetchCoinData } from "../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-2xl">
        Error: {error.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-blue-500 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto">
      <div className="w-full bg-blue-600 text-white flex py-4 px-2 font-semibold items-center justify-center rounded-t-lg">
        {/* Header of the table */}
        <div className="basis-[10%]">#</div>
        <div className="basis-[25%]">Coin</div>
        <div className="basis-[20%]">Price</div>
        <div className="basis-[20%]">24h Change</div>
        <div className="basis-[25%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-full">
        {data.data.map((coin, index) => (
          <div
            key={coin.id}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 flex py-4 px-2 font-semibold items-center justify-between cursor-pointer transition duration-300 ease-in-out border-b border-gray-200"
          >
            <div className="basis-[5%] text-lg text-center">
              {(page - 1) * 10 + index + 1}
            </div>
            <div className="flex items-center justify-start gap-3 basis-[25%]">
              <div className="w-[3rem] h-[3rem]">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold">{coin.name}</div>
                <div className="text-sm text-gray-600">
                  {coin.symbol.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="basis-[20%] text-lg">
              ${coin.current_price.toLocaleString()}
            </div>
            <div
              className={`basis-[20%] text-lg ${
                coin.price_change_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.price_change_24h.toFixed(2)}%
            </div>
            <div className="basis-[25%] text-lg">
              ${coin.market_cap.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center items-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
