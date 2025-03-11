import { useState } from "react";
import Home from "./pages/Home";
import { CurrencyContext } from "./context/CurrencyContext";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <div className="mx-2">
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
