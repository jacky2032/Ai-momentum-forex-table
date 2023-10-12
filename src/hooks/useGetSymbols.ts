import { useEffect, useState } from "react";
import axios from "axios";
import { ApiState } from "@/enums";

const URL = import.meta.env.VITE_FOREX_SYMBOL_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const useGetSymbols = (): [ApiState, any] => {
  const [apiState, setApiState] = useState<ApiState>(ApiState.IDLE);
  const [result, setResult] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiState(ApiState.FETCHING);
        const response = await axios.get(URL, {
          headers: {
            apiKey: API_KEY,
          },
        });
        setResult(response.data.symbols);
        setApiState(ApiState.DONE);
      } catch (error) {
        setApiState(ApiState.ERROR);
      }
    };
    fetchData();
  }, []);
  return [apiState, result];
};
export default useGetSymbols;
