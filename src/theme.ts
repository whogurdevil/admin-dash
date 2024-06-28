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
    info: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#191c24",
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#191c24",
          boxShadow: "none",
          elevation: 0,
          backgroundImage: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#191c24",
          border: 0,
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
          backgroundColor: "#191c24",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#191c24",
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#191c24",
        },
      },
    },
  },
});

export default theme;
