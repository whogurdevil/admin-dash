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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#12141a", // Change this to the desired bluish color
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#12141a",
          boxShadow: "none", // Remove shadow
          elevation: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#12141a", // Bluish background color for Drawer
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
            backgroundColor: "transparent", // Remove focus outline
          },
          "&:active": {
            backgroundColor: "transparent", // Remove active effect
            touchAction: "none", // Prevent weird effect on click
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: "grey", // Set the text color for TableRow
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "grey", // Set the text color for TableCell
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0, // Remove left padding
          paddingRight: 0, // Remove right padding
        },
      },
    },
  },
});

export default theme;
