import { Box, Toolbar, CssBaseline } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { ReactNode } from "react";

interface ILayout {
  children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Sidebar />
      <Main>{children}</Main>
    </Box>
  );
};

export default Layout;
