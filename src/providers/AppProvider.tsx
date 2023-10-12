import { useState, ReactNode } from "react";
import AppContext from "@/context/AppContext";
import { useGetLatest, useGetSymbols } from "@/hooks";
import { ApiState } from "@/enums";

const DEFAULT_CONFIG = {
  baseCurrency: import.meta.env.VITE_BASE_CURRENCY ?? "HKR",
  selectedCurrencies: ["MYR", "SGD"],
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(
    DEFAULT_CONFIG.selectedCurrencies
  );
  const [baseCurrency, setBaseCurrency] = useState<string>(
    DEFAULT_CONFIG.baseCurrency
  );
  const [latestApiState, latestResult] = useGetLatest(
    baseCurrency,
    selectedCurrencies.join(",")
  );
  const [symbolApiState, symbolResult] = useGetSymbols();

  const isLoading =
    symbolApiState === ApiState.FETCHING ||
    latestApiState === ApiState.FETCHING;
  const isError =
    symbolApiState === ApiState.ERROR || latestApiState === ApiState.ERROR;
  const isDone =
    symbolApiState === ApiState.DONE && latestApiState === ApiState.DONE;

  if (isLoading) return "Loading";
  if (isError) return "Opps Error occur";
  if (isDone)
    return (
      <AppContext.Provider
        value={{
          selectedCurrencies,
          baseCurrency,
          setBaseCurrency,
          setSelectedCurrencies,
          latestResult,
          symbolResult,
        }}
      >
        {children}
      </AppContext.Provider>
    );
};

export default AppProvider;
