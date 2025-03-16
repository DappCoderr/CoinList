import { axiosInstance } from "../helper/axiosInstance";

export async function fetchCoinDetails(coinId) {
  try {
    const response = await axiosInstance.get(`/coins/${coinId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
