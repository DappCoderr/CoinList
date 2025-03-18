import { fetchCoinData } from "../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useFetchCoinData = (page, currency) => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return {
    navigate,
    data,
    isLoading,
    isError,
    error,
  };
};

export default useFetchCoinData;
