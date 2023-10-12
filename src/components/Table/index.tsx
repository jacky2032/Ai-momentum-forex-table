import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  SxProps,
  Theme,
} from "@mui/material";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import CustomTableCell from "./CustomTableCell";
const styles: Record<string, SxProps<Theme>> = {
  "cell--red": {
    border: "2px solid red",
  },
};

const OFFSET = 10.0002;

const ForexTable = () => {
  const { latestResult } = useContext(AppContext);
  return (
    <Table sx={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          {Object.entries(latestResult).map(([symbol, rate]) => (
            <CustomTableCell
              symbol={symbol}
              rate={rate}
              type="HEADER"
              key={symbol}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Original</TableCell>
          {Object.entries(latestResult).map(([symbol, rate]) => (
            <CustomTableCell
              symbol={symbol}
              rate={rate}
              type="BODY"
              key={symbol}
            />
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Processed</TableCell>
          {Object.entries(latestResult).map(([symbol, rate]) => (
            <CustomTableCell
              symbol={symbol}
              rate={rate + OFFSET}
              type="BODY"
              key={symbol}
            />
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ForexTable;
