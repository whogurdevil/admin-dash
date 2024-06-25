import * as React from "react";
import {
  styled,
  alpha,
} from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Badge,
  TextField,
  TextFieldProps,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Logout, Settings } from "@mui/icons-material";

const drawerWidth = 240;

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  zIndex: 1000,
  marginRight: "100px",
  [theme.breakpoints.up("xs")]: { display: "none" },
  [theme.breakpoints.up("sm")]: { display: "none" },
  [theme.breakpoints.up("md")]: { display: "flex" },
  width: "60%",
  "& .MuiOutlinedInput-root": {
    padding: theme.spacing(0.9),
    height: "40px",
    "& fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.2),
      borderRadius: 7,
    },
    "&:hover fieldset": { borderColor: alpha(theme.palette.grey[500], 0.2) },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.2),
    },
  },
}));

interface AppBarProps {
  open: boolean;
  toggleDrawer: () => void;
  anchorEl: null | HTMLElement;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  menuId: string;
  isMenuOpen: boolean;
}

const AppBarComponent: React.FC<AppBarProps> = ({
  open,
  toggleDrawer,
  anchorEl,
  handleProfileMenuOpen,
  handleMenuClose,
  menuId,
  isMenuOpen,
}) => {
  const [mailAnchorEl, setMailAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );
  const [notificationAnchorEl, setNotificationAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMailMenuOpen = Boolean(mailAnchorEl);
  const isNotificationMenuOpen = Boolean(notificationAnchorEl);

  const handleMailMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMailAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMailMenuClose = () => {
    setMailAnchorEl(null);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  const mailMenu = (
    <Menu
      anchorEl={mailAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="mail-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMailMenuOpen}
      onClose={handleMailMenuClose}
    >
      <List sx={{ backgroundColor: "#12141a" }}>
        <MenuItem onClick={handleMailMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          >
            <MailIcon fontSize="small" />
          </IconButton>
          Mail 1
        </MenuItem>
        <MenuItem onClick={handleMailMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          >
            <MailIcon fontSize="small" />
          </IconButton>
          Mail 2
        </MenuItem>
      </List>
    </Menu>
  );

  const notificationMenu = (
    <Menu
      anchorEl={notificationAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="notification-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
    >
      <List sx={{ backgroundColor: "#12141a" }}>
        <MenuItem onClick={handleNotificationMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          >
            <NotificationsIcon fontSize="small" />
          </IconButton>
          Notification 1
        </MenuItem>
        <MenuItem onClick={handleNotificationMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          >
            <NotificationsIcon fontSize="small" />
          </IconButton>
          Notification 2
        </MenuItem>
      </List>
    </Menu>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <List sx={{ backgroundColor: "#12141a" }}>
        <MenuItem sx={{ width: "150px" }}>Profile </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "success.main",
            }}
          >
            <Settings fontSize="small" />
          </IconButton>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "error.main",
            }}
          >
            <Logout fontSize="small" />
          </IconButton>
          Logout
        </MenuItem>
        <Divider />
        <MenuItem sx={{ width: "150px", fontSize: "13px" }}>
          Advanced Settings{" "}
        </MenuItem>
      </List>
    </Menu>
  );

  return (
    <MuiAppBar position="fixed" open={open}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          fontWeight={"bold"}
          sx={{ width: open ? drawerWidth : "auto" }}
        >
          {open ? "CORONA" : "C"}
        </Typography>
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ marginLeft: 3, marginRight: 5 }}
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
            minWidth: "180px",
            paddingX: 4,
          }}
        >
          <Typography fontSize={"small"}>{"+ Create New Project"}</Typography>
        </Button>
        <Box sx={{ display: { xs: "flex", md: "flex", sm: "flex" }, gap: 2 }}>
          <Divider orientation="vertical" flexItem />

          <IconButton
            disableRipple
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleMailMenuOpen}
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
          <Divider orientation="vertical" flexItem />

          <IconButton
            disableRipple
            size="large"
            aria-label="show 17            new notifications"
            color="inherit"
            onClick={handleNotificationMenuOpen}
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
                maxWidth: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Henry Klein ▼
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
      {profileMenu}
      {mailMenu}
      {notificationMenu}
    </MuiAppBar>
  );
};

export default AppBarComponent;
