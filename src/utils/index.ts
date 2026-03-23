import { createTheme } from "@mui/material";
import type { PaletteMode } from "@mui/material/styles";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: mode === "light" ? "#2563eb" : "#3b82f6", 
        contrastText: "#ffffff",
      },

      secondary: {
        main: mode === "light" ? "#787878" : "#c9c9c9", 
      },

      background: {
        default: mode === "light" ? "#f8fafc" : "#0f172a",
        paper: mode === "light" ? "#ffffff" : "#1e293b",
      },

      text: {
        primary: mode === "light" ? "#000" : "#ffffff",
        secondary: mode === "light" ? "#475569" : "#94a3b8",
      },
    },
    breakpoints:{
      values:{
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl:1400,
      }
    }
  });