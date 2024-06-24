// theme.ts
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
          backgroundColor: "#12141a",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#12141a",
          boxShadow: "none",
          elevation: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#12141a",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:focus": {
            outline: "none",
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
            touchAction: "none",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: "grey",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "grey",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#12141a",
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#12141a",
        },
      },
    },
  },
});

export default theme;
