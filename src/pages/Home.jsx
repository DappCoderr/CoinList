import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import CoinTable from "../component/CoinTable";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CoinTable />
      <Footer />
    </>
  );
};

export default Home;
