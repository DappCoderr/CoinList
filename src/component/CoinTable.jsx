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
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
        {/* Header of the table */}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
