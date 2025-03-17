import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import currencyStore from "../store/currencyStore";
import { fetchCoinDetails } from "../services/FetchCoinDetails";

const CoinDetails = () => {
  const { coinId } = useParams();
  //   const id = useLocation().state.id;

  const { currency } = currencyStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={data?.image?.large}
            alt={coinId}
            className="w-20 h-20 rounded-lg ring-4 ring-white/50 shadow-lg"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {coinId?.toUpperCase()}
          </h1>
          <span className="ml-4 text-2xl font-semibold text-gray-500">
            ({data?.symbol?.toUpperCase()})
          </span>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {data?.categories?.map((element, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors"
              >
                {element}
              </span>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:ring-1 hover:ring-blue-500/20">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Hashing Algorithm
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              {data?.hashing_algorithm || "N/A"}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:ring-1 hover:ring-blue-500/20">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Market Cap Rank
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              #{data?.market_cap_rank || "N/A"}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:ring-1 hover:ring-blue-500/20">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Current Price
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              {currency === "usd" ? "$" : "₹ "}
              {/* {coin.market_cap.toLocaleString()} */}
              {currency === "usd"
                ? data?.market_data?.current_price?.usd?.toLocaleString()
                : data?.market_data?.current_price?.inr?.toLocaleString() ||
                  "N/A"}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {data?.description?.en || "No description available"}
          </p>
        </div>

        {/* Additional Details */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Price Changes
            </h3>
            <div className="space-y-3">
              {Object.entries(
                data?.market_data?.price_change_percentage_24h_in_currency || {}
              ).map(([currency, value]) => (
                <div
                  key={currency}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">
                    {currency.toUpperCase()}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      value >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {value.toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Market Data
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">24h High</span>
                <span className="text-gray-800 font-medium">
                  ${data?.market_data?.high_24h?.usd?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">24h Low</span>
                <span className="text-gray-800 font-medium">
                  ${data?.market_data?.low_24h?.usd?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Circulating Supply</span>
                <span className="text-gray-800 font-medium">
                  {data?.market_data?.circulating_supply?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
