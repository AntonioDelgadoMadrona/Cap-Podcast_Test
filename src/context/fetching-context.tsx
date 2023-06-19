// DEPENDENCIES
import React, { createContext, useState } from "react";

interface FetchingContextProps {
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FetchingContext = createContext<FetchingContextProps>({
  isFetching: false,
  setIsFetching: (isFetching) => isFetching,
});

export function FetchingProvider({ children }: { children: React.ReactNode }) {
  const [isFetching, setIsFetching] = useState(false);
  return <FetchingContext.Provider value={{ isFetching, setIsFetching }}>{children}</FetchingContext.Provider>;
}
