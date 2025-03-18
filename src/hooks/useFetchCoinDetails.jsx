import currencyStore from "../store/currencyStore";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/FetchCoinDetails";

const useFetchCoinDetails = (coinId) => {
  const { currency } = currencyStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return {
    currency,
    data,
    isLoading,
    isError,
    error,
  };
};

export default useFetchCoinDetails;
