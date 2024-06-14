"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography, Box, Grid } from "@mui/material";
import { DocumentScanner } from "@mui/icons-material";

export default function AlignItemsList(props) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "Background.default",
        alignContent: "space-between",
      }}
    >
      <ListItem sx={{ paddingX: 0 }}>
        <ListItemAvatar
          sx={{ minWidth: 56, width: 56, height: 56, marginRight: 2 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%", // Set the height of the box
              bgcolor: `${props.data.color}.main`, // Set the background color
              display: "flex", // Use flexbox to center the icon
              alignItems: "center", // Vertically center the icon
              justifyContent: "center",
              alignSelf: "start",
            }}
          >
            <props.data.icon sx={{ color: "white" }} />
          </Box>
        </ListItemAvatar>
        <Grid flexGrow={1}>
          <Typography fontWeight={"bold"}>{props.data.title}</Typography>
          <Typography color={"grey"}>{props.data.desc}</Typography>
        </Grid>
        <Box>
          <Typography color={"grey"} textAlign={"right"}>
            {props.data.time}
          </Typography>
          <Typography color={"grey"}>{props.data.tasks}</Typography>
        </Box>
      </ListItem>
      {!props.lastItem && <Divider />}
    </List>
  );
}
