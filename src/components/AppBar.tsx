import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
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
  ListItemText,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  CalendarToday,
  Event,
  Link,
  Logout,
  Settings,
  Today,
  Window,
} from "@mui/icons-material";
import avatarImage from "@/assets/face15.jpg";
import Image from "next/image";
import Corona from "../../public/assets/corona.svg";
import CImage from "../../public/assets/c.svg";
import MessageMenulist from "./MessageMenuList";

const drawerWidth = 240;

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  zIndex: 1000,
  marginRight: "180px",
  [theme.breakpoints.up("xs")]: { display: "none" },
  [theme.breakpoints.up("sm")]: { display: "none" },
  [theme.breakpoints.up("md")]: { display: "flex" },
  width: "60%",
  "& .MuiOutlinedInput-root": {
    padding: theme.spacing(0.9),
    fontSize: "0.875rem",
    height: "36px",
    "& fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.1),
      borderRadius: 7,
    },
    "&:hover fieldset": { borderColor: alpha(theme.palette.grey[500], 0.1) },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.grey[500], 0.1),
      shadows: "none",
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
    console.log(event.currentTarget);
  };

  const handleMailMenuClose = () => {
    setMailAnchorEl(null);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  const messagesData = [
    {
      avatarImage: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Mark send you a message",
      time: "",
      message: "1 Minutes ago",
    },
    {
      avatarImage: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Cregh send you a message",
      time: "",
      message: "15 Minutes ago",
    },

    {
      avatarImage: "https://randomuser.me/api/portraits/women/33.jpg",
      name: "Profile picture updated",
      time: "",
      message: "18 Minutes ago",
    },
  ];
  const mailMenu = (
    <Menu
      anchorEl={mailAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id="mail-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMailMenuOpen}
      onClose={handleMailMenuClose}
    >
      <List sx={{ backgroundColor: "#191c24" }}>
        <MenuItem
          onClick={handleNotificationMenuClose}
          sx={{ paddingY: 0, fontWeight: "bold" }}
        >
          Messages
        </MenuItem>
        {messagesData.map((data, index) => (
          <MessageMenulist data={data} key={index} />
        ))}
        <MenuItem
          onClick={handleNotificationMenuClose}
          sx={{ justifyContent: "center", paddingY: 0 }}
        >
          See all notifications
        </MenuItem>
      </List>
    </Menu>
  );

  const notificationMenu = (
    <Menu
      anchorEl={notificationAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id="notification-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
    >
      {" "}
      <List sx={{ backgroundColor: "#191c24" }}>
        <MenuItem
          onClick={handleNotificationMenuClose}
          sx={{ paddingY: 0, fontWeight: "bold" }}
        >
          Notification
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleNotificationMenuClose} sx={{ paddingY: 0 }}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
              padding: 1.5,
            }}
          >
            <Event fontSize="small" color="success" />
          </IconButton>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={"Event Today"}
              secondary={
                <Typography fontSize={"small"} color={"grey"}>
                  {"Just a reminder that you have..."}
                </Typography>
              }
            />
          </ListItem>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleNotificationMenuClose} sx={{ paddingY: 0 }}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
              padding: 1.5,
            }}
          >
            <Settings fontSize="small" color="error" />
          </IconButton>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={"Settings"}
              secondary={
                <Typography fontSize={"small"} color={"grey"}>
                  {"Update dashboard"}
                </Typography>
              }
            />
          </ListItem>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleNotificationMenuClose} sx={{ paddingY: 0 }}>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              backgroundColor: "black",
              color: "primary.main",
              padding: 1.5,
            }}
          >
            <Link fontSize="small" color={"warning"} />
          </IconButton>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={"Launch Admin"}
              secondary={
                <Typography fontSize={"small"} color={"grey"}>
                  {"New admin wow!"}
                </Typography>
              }
            />
          </ListItem>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleNotificationMenuClose}
          sx={{ justifyContent: "center", paddingY: 0 }}
        >
          See all notifications
        </MenuItem>
      </List>
    </Menu>
  );

  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <List sx={{ backgroundColor: "#191c24" }}>
        <MenuItem sx={{ width: "170px", fontWeight: "bold" }}>
          Profile{" "}
        </MenuItem>
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
        <MenuItem sx={{ width: "150px", fontSize: "14px" }}>
          Advanced Settings
        </MenuItem>
      </List>
    </Menu>
  );

  console.log(open);

  return (
    <AppBar position="fixed" sx={{ paddingY: "3px" }}>
      <Toolbar>
        <Box sx={{ width: open ? drawerWidth + 120 : 50, paddingY: 2 }}>
          {open ? (
            <Image
              alt="c"
              src={Corona.src}
              width={drawerWidth - 120}
              height={28}
            />
          ) : (
            <Image alt="c" src={CImage.src} width={20} height={28} />
          )}
        </Box>
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ marginLeft: 3, marginRight: 5 }}
        >
          <MenuIcon sx={{ color: "grey", fontSize: "15px" }} />
        </IconButton>
        <StyledTextField placeholder="Search projects" variant="outlined" />
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="success"
          variant="contained"
          sx={{
            marginX: 3,
            color: "white",
            display: { xs: "none", md: "flex", sm: "none" },
            whiteSpace: "nowrap",
            minWidth: "fit-content",
            paddingX: 2,
            paddingY: 0.5,
          }}
        >
          <Typography
            textTransform={"capitalize"}
            sx={{
              fontFamily: "Rubik",
              fontSize: "0.9375rem",
            }}
          >
            {"+ Create New Project"}
          </Typography>
        </Button>
        <Box sx={{ display: { xs: "flex", md: "flex", sm: "flex" }, gap: 1 }}>
          <IconButton disableRipple size="small" color="inherit">
            <Window fontSize="small" />
          </IconButton>

          <Divider orientation="vertical" variant="middle" flexItem />

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
          <Divider orientation="vertical" variant="middle" flexItem />

          <IconButton
            disableRipple
            size="large"
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
            <Avatar alt="H" src={avatarImage.src} />
            <Typography
              fontSize={"small"}
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
    </AppBar>
  );
};

export default AppBarComponent;
