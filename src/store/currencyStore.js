import { create } from "zustand";

const currencyStore = create((set) => ({
  currency: "usd",
  setCurrency: (newCurrency) => set(() => ({ currency: newCurrency })),
}));

export default currencyStore;
