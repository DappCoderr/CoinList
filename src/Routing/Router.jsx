import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CoinDetails from "../pages/CoinDetails";
import { AdminLayout, MainLayout } from "../pages/Layout";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        {/* <Route path="/admin/home" element={<Home />} /> */}
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
