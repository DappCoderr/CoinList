import React, { useEffect } from "react";
import { fetchCoinData } from "../services/FetchCoinData";

const CoinTable = () => {
  useEffect(() => {
    fetchCoinData(1, "usd");
    console.log(fetchCoinData(1, "usd"));
  });

  return <div>CoinTable</div>;
};

export default CoinTable;
