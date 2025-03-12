import { axiosInstance } from "../helper/axiosInstance";

export async function fetchCoinData(page, currency) {
  const perPage = 20;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
