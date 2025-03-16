import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CoinDetails from "../pages/CoinDetails";
import MainLayout from "../pages/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
