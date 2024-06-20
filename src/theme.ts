"use client";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#191C24", // Change this to the desired bluish color
          // You can add more styles as needed
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#191C24",
          boxShadow: "none", // Remove shadow
          elevation: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#191C24", // Bluish background color for Drawer
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent", // Remove hover effect
          },
          "&:focus": {
            outline: "none",
            backgrounfColor: "transparent", // Remove focus outline
          },
          "&:active": {
            backgroundColor: "transparent", // Remove active effect
            touchAction: "none", // Prevent weird effect on click
          },
        },
      },
    },
  },
});

export default theme;
