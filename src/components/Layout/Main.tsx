import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface IMain {
  children: ReactNode;
}

const styles: Record<string, SxProps<Theme>> = {
  main: {
    marginLeft: "320px",
  },
};

const Main = ({ children }: IMain) => {
  return (
    <Box component="main" sx={styles.main}>
      {children}
    </Box>
  );
};
export default Main;
