import { useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import Router from "./Routing/Router";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <div className="mx-2">
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Router />
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
