import { useState } from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import CoinTable from "./component/CoinTable";

function App() {
  return (
    <div className="mx-2">
      <Navbar />
      <Banner />
      <CoinTable />
    </div>
  );
}

export default App;
