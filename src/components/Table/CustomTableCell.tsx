import { TableCell, SxProps } from "@mui/material";

interface ICustomTableCell {
  symbol: string;
  rate: number;
  type: "HEADER" | "BODY";
}

const styles: Record<string, SxProps> = {
  "cell--red": {
    border: "2px solid red",
  },
};
const BASE_CURRENCY = import.meta.env.VITE_BASE_CURRENCY ?? "HKD";

const CustomTableCell = ({ rate, symbol, type }: ICustomTableCell) => {
  const isEvenNumber = (number: number) => Math.floor(number) % 2 === 0;

  let style;
  if (type === "BODY") {
    style = isEvenNumber(rate) ? styles["cell--red"] : {};
  }
  if (type === "HEADER") {
    style = symbol === BASE_CURRENCY ? styles["cell--red"] : {};
  }
  if (type === "HEADER") return <TableCell sx={style}>{symbol}</TableCell>;
  if (type === "BODY") return <TableCell sx={style}>{rate}</TableCell>;
};
export default CustomTableCell;
