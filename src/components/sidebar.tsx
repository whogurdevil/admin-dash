"use client";

import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Window } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { SidebarList } from "./sidebar_list";
import {
  MenuItem,
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  Button,
  TextField,
  TextFieldProps,
  Avatar,
} from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  marginRight: "100px",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },

  width: "60%",
  "& .MuiOutlinedInput-root": {
    padding: theme.spacing(0.9),
    height: "40px",

    "& fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.2),
      borderRadius: 7,
    },
    "&:hover fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.2),
    },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.2),
    },
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight={"bold"}
            sx={{
              width: open ? drawerWidth : "auto",
            }}
          >
            {open ? "CORONA" : "C"}
          </Typography>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginLeft: 3,
              marginRight: 5,
            }}
          >
            <MenuIcon fontSize="small" sx={{ color: "grey" }} />
          </IconButton>

          <StyledTextField placeholder="Search projects" variant="outlined" />

          <Box sx={{ flexGrow: 1 }} />

          <Button
            color="success"
            variant="contained"
            sx={{
              marginX: 2,
              color: "white",
              display: { xs: "none", md: "flex", sm: "none" },
              whiteSpace: "nowrap",
              width: "fit-content",
              minWidth: "180px", // Adjust this value as needed
              paddingX: 4,
            }}
          >
            <Typography>{"+ Create New Project"}</Typography>
          </Button>
          <Box sx={{ display: { xs: "flex", md: "flex", sm: "flex" }, gap: 2 }}>
            <IconButton
              disableRipple
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Window fontSize="small" />
            </IconButton>

            <IconButton
              disableRipple
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge
                badgeContent={""}
                color="success"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <MailIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton
              disableRipple
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                badgeContent={""}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton
              disableRipple
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="H"
                src="https://randomuser.me/api/portraits/men/3.jpg"
              />
              <Typography
                sx={{
                  marginLeft: 2,
                  display: { xs: "none", md: "flex", sm: "flex" },
                  maxWidth: "150px", // Set maximum width to prevent overflow
                  overflow: "hidden", // Ensure overflow text is hidden
                  textOverflow: "ellipsis", // Add ellipsis for overflow text
                  whiteSpace: "nowrap", // Prevent text from wrapping to the next line
                }}
              >
                Henry Klein ▼
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
        {renderMenu}
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <SidebarList open={open} />
      </Drawer>
    </>
  );
}
