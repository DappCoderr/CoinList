import { useState } from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import CoinTable from "./component/CoinTable";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="mx-2">
      <Navbar />
      <Banner />
      <CoinTable />
      <Footer />
    </div>
  );
}

export default App;
