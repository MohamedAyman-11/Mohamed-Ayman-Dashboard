import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState } from "react";
import type { PaletteMode } from "@mui/material/styles";
import TopBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { getTheme } from "../utils";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const RootLayout = () => {
  /* ** States And Dark Mode ** */
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("currentMode");
    return savedMode === "dark" ? "dark" : "light";
  });
  const theme = useMemo(() => getTheme(mode), [mode]);
  /* ** Handlers ** */
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          setMode={setMode}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default RootLayout;
