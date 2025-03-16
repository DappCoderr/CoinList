import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CoinDetails from "../pages/CoinDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:coinId" element={<CoinDetails />} />
    </Routes>
  );
};

export default Router;
