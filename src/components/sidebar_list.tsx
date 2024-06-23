import useActiveLink from "@/hooks/active_link";
import {
  Window,
  Home,
  Speed,
  LaptopWindows,
  PlaylistPlay,
  GridOn,
  Contacts,
  BarChart,
  Security,
  Article,
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
} from "@mui/material";
import Link from "next/link";

const menuItems = [
  { text: "Dashboard", icon: Speed, href: "/home", color: "secondary" },
  {
    text: "Basic UI Elements",
    icon: LaptopWindows,
    href: "/ui",
    color: "warning",
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

import React from "react";

export const SidebarList = (props: any) => {
  console.log(props);
  const activePath = useActiveLink();

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
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt={"H"}
            src={"https://randomuser.me/api/portraits/men/3.jpg"}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{
            opacity: props.open ? 1 : 0,
            ml: props.open ? 1 : "auto",
          }}
          primary={"Henry Klien"}
          secondary={
            <Typography color={"grey"} fontSize={"small"}>
              Gold Member
            </Typography>
          }
        />
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
        <ListItem
          key={item.text}
          disablePadding
          sx={{
            display: "block",
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
                color: activePath === item.href ? "white" : "grey",

                borderLeft:
                  activePath === item.href
                    ? "3px solid #0090E7"
                    : "3px solid black",
                backgroundColor: activePath === item.href ? "black" : "none",
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
                primary={item.text}
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
      ))}
    </List>
  );
};
