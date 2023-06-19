// DEPENDENCIES
import { useContext } from "react";
import { FetchingContext } from "../context/fetching-context";

export function useFetching() {
  const { isFetching, setIsFetching } = useContext(FetchingContext);
  return { isFetching, setIsFetching };
}
