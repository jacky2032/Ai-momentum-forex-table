import { createContext, SetStateAction, Dispatch } from "react";

export interface IAppContext {
  baseCurrency: string;
  selectedCurrencies: string[];
  setBaseCurrency: Dispatch<SetStateAction<string>>;
  setSelectedCurrencies: Dispatch<SetStateAction<string[]>>;
  latestResult: Record<string, number>;
  symbolResult: Record<string, string>;
  setFilter: Dispatch<
    SetStateAction<{
      baseCurrency: string;
      selectedCurrencies: string[];
    }>
  >;
}

const AppContext = createContext<IAppContext>({
  baseCurrency: "",
  selectedCurrencies: [],
  setBaseCurrency: () => {},
  setSelectedCurrencies: () => {},
  latestResult: {},
  symbolResult: {},
  setFilter: () => {},
});

export default AppContext;
