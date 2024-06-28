import useActiveLink from "@/hooks/ActiveLink";
import {
  Speed,
  LaptopWindows,
  PlaylistPlay,
  GridOn,
  Contacts,
  BarChart,
  Security,
  Article,
  MoreVert,
  Settings,
  Info,
  Today,
} from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Collapse,
  Badge,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";
import avatarImage from "@/assets/face15.jpg";

const menuItems = [
  { text: "Dashboard", icon: Speed, href: "/home", color: "secondary" },
  {
    text: "Basic UI Elements",
    icon: LaptopWindows,
    href: "/ui",
    color: "warning",
    submenu: [
      { text: "Buttons", href: "/ui/buttons" },
      { text: "Dropdowns", href: "/ui/dropdowns" },
      { text: "Typography", href: "/ui/typography" },
    ],
  },
  {
    text: "Form Elements",
    icon: PlaylistPlay,
    href: "/form-elements",
    color: "error",
  },
  { text: "Tables", icon: GridOn, href: "/tables", color: "primary" },
  { text: "Charts", icon: BarChart, href: "/charts", color: "success" },
  { text: "Icons", icon: Contacts, href: "/icons", color: "secondary" },
  { text: "User Pages", icon: Security, href: "/user-pages", color: "warning" },
  {
    text: "Documentation",
    icon: Article,
    href: "/documentation",
    color: "error",
  },
];

const getTextBeforeSecondSlash = (path) => {
  const parts = path.split("/");
  if (parts.length >= 2) {
    let result = `/${parts[1]}`;
    return result;
  }
  return path;
};

export const SidebarList = (props: any) => {
  const activePath = useActiveLink();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubMenuToggle = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ListItem
        sx={{
          minHeight: 48,
          justifyContent: props.open ? "initial" : "center",
          borderRadius: "0 40px 40px 0",
          border: "0px 3px 0px 0px black",
          paddingLeft: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItemAvatar>
          <Badge
            badgeContent={""}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="success"
            sx={{
              "& .MuiBadge-badge": {
                minWidth: "8px",
                height: "8px",
                fontSize: "5px",
                padding: "0 1px",
              },
            }}
          >
            <Avatar alt={"H"} src={avatarImage.src} />
          </Badge>
        </ListItemAvatar>
        <ListItemText
          sx={{
            opacity: props.open ? 1 : 0,
            ml: props.open ? 0.5 : "auto",
          }}
          primary={"Henry Klien"}
          secondary={
            <Typography color={"grey"} fontSize={"small"}>
              Gold Member
            </Typography>
          }
        />
        {props.open && (
          <>
            <IconButton
              sx={{ marginRight: 1 }}
              edge="end"
              aria-label="more"
              onClick={handleMenuOpen}
            >
              <MoreVert color="disabled" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Settings color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography sx={{ fontSize: "12px" }}>
                  Account Settings
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Info color="secondary" fontSize="small" />
                </ListItemIcon>
                <Typography sx={{ fontSize: "12px" }}>
                  Change Password
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Today color={"success"} fontSize="small" />
                </ListItemIcon>
                <Typography sx={{ fontSize: "12px" }}>To-do list</Typography>
              </MenuItem>
            </Menu>
          </>
        )}
      </ListItem>
      <ListItem
        sx={{
          minHeight: 48,
          justifyContent: props.open ? "initial" : "center",
          borderRadius: "0 40px 40px 0",
          border: "0px 3px 0px 0px black",
          paddingLeft: 2,
          display: props.open ? "flex" : "none",
        }}
      >
        <Typography
          color={"grey"}
          fontWeight={"bold"}
          sx={{
            opacity: props.open ? 1 : 0,
            ml: props.open ? 1 : "auto",
          }}
        >
          {"Navigation"}
        </Typography>
      </ListItem>

      {menuItems.map((item) => (
        <React.Fragment key={item.text}>
          {item.submenu ? (
            <>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  paddingRight: 0,
                }}
              >
                <ListItemButton
                  onClick={handleSubMenuToggle}
                  sx={{
                    minHeight: 48,
                    justifyContent: props.open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: "0 40px 40px 0",
                    marginRight: props.open ? 2 : 0,
                    border: "0px 3px 0px 0px black",
                    color:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "white"
                        : "grey",
                    borderLeft:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "3px solid #0090E7"
                        : "3px solid black",
                    backgroundColor:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "black"
                        : "none",
                    "&:hover": {
                      borderRadius: "0 40px 40px 0",
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#22242E",
                      padding: 0.6,
                      borderRadius: 10,
                    }}
                  >
                    <item.icon color={item.color} fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"small"}>{item.text}</Typography>
                    }
                    sx={{
                      opacity: props.open ? 1 : 0,
                      ml: props.open ? 1 : "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                  {props.open &&
                    (openSubMenu ? (
                      <ExpandLess fontSize="small" />
                    ) : (
                      <ExpandMore fontSize="small" />
                    ))}
                </ListItemButton>
              </ListItem>
              <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subitem) => (
                    <ListItemButton
                      key={subitem.text}
                      component={Link}
                      href={subitem.href}
                      sx={{
                        pl: 4,
                        borderRadius: "0 40px 40px 0",
                        marginRight: props.open ? 2 : 0,
                        border: "0px 3px 0px 0px black",
                        color: "grey",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography fontSize={"small"} color={"inherit"}>
                            {subitem.text}
                          </Typography>
                        }
                        sx={{
                          opacity: props.open ? 1 : 0,
                          ml: props.open ? 1 : "auto",
                          display: "flex",
                          alignItems: "center",
                          "&:hover:": {
                            color: "white",
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              disablePadding
              sx={{
                display: "block",
                paddingRight: 0,
              }}
            >
              <Link href={item.href} passHref legacyBehavior>
                <ListItemButton
                  component="a"
                  sx={{
                    minHeight: 48,
                    justifyContent: props.open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: "0 40px 40px 0",
                    marginRight: props.open ? 2 : 0,
                    border: "0px 3px 0px 0px black",
                    color:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "white"
                        : "grey",
                    borderLeft:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "3px solid #0090E7"
                        : "3px solid black",
                    backgroundColor:
                      getTextBeforeSecondSlash(activePath) === item.href
                        ? "black"
                        : "none",
                    "&:hover": {
                      borderRadius: "0 40px 40px 0",
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#22242E",
                      padding: 0.6,
                      borderRadius: 10,
                    }}
                  >
                    <item.icon color={item.color} fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"small"}>{item.text}</Typography>
                    }
                    sx={{
                      opacity: props.open ? 1 : 0,
                      ml: props.open ? 1 : "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
