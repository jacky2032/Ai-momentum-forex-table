import {
  Box,
  Toolbar,
  Drawer,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Divider,
  Checkbox,
  TextField,
  FormGroup,
  SxProps,
} from "@mui/material";
import { baseCurrencies } from "@/configs";
import { useContext, ChangeEvent, useState, useEffect } from "react";
import AppContext, { IAppContext } from "@/context/AppContext";

const styles: Record<string, SxProps> = {
  sidebar: {
    maxWidth: "300px",
    padding: "1em",
    "& .MuiPaper-root": {
      width: "300px",
    },
  },
};

const Layout = () => {
  const [filter, setFilter] = useState("");
  const [filterList, setFilterList] = useState<[string, string][]>([]);
  const {
    baseCurrency,
    setBaseCurrency,
    symbolResult,
    selectedCurrencies,
    setSelectedCurrencies,
  } = useContext<IAppContext>(AppContext);
  const onChangeBaseCurrency = (e: ChangeEvent<HTMLInputElement>) => {
    setBaseCurrency(e.target.value);
  };
  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const onChangeSelectedSymbol = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCurrencies((prev) => {
      const { value, checked } = e.target;
      if (checked) return [...prev, value];
      const newArray = [...prev];
      const index = newArray.findIndex((symbol) => symbol === value);
      newArray.splice(index, 1);
      return newArray;
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = Object.entries(symbolResult).filter(([, label]) => {
        return new RegExp(`${filter}`, "i").test(label);
      });

      setFilterList(result);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [filter, symbolResult]);

  return (
    <Drawer variant="permanent" sx={styles.sidebar}>
      <Toolbar />
      <Box sx={styles.sidebar}>
        <FormControl>
          <FormLabel>Base currency</FormLabel>
          <RadioGroup
            name="base-currency"
            value={baseCurrency}
            onChange={onChangeBaseCurrency}
          >
            {baseCurrencies.map(({ symbol, label }) => (
              <FormControlLabel
                key={symbol}
                value={symbol}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box sx={{ padding: ".8em" }}>
        <TextField
          placeholder="Filter"
          variant="standard"
          value={filter}
          onChange={onChangeFilter}
          sx={{ padding: ".5em", mb: "1em" }}
        />
        <FormGroup>
          <FormLabel>Selected symbols</FormLabel>
          {filterList.map(([symbol, label]) => (
            <FormControlLabel
              key={symbol}
              control={
                <Checkbox
                  value={symbol}
                  checked={selectedCurrencies.includes(symbol)}
                  onChange={onChangeSelectedSymbol}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </Box>
    </Drawer>
  );
};

export default Layout;
