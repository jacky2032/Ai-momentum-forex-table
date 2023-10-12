import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      component={"header"}
    >
      <Toolbar>
        <Typography variant="h5">Forex Rates Table</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
