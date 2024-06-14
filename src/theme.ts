"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0090E7",
    },
    secondary: {
      main: "#8F5FE8",
    },
    success: {
      main: "#00D25B",
    },
    error: {
      main: "#fc424a",
    },
    warning: {
      main: "#FFAB00",
    },
    background: {
      default: "#000000",
    },
  },
});

export default theme;
