"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography, Box, Grid } from "@mui/material";
import styles from "@/styles/ListTile.module.scss"; // Import the SCSS module

export default function ListTile(props: any) {
  return (
    <List className={styles.list}>
      <ListItem className={styles.listItem}>
        <ListItemAvatar className={styles.listItemAvatar}>
          <Box
            className={styles.avatarBox}
            sx={{ backgroundColor: `${props.data.color}.main` }}
          >
            <props.data.icon className={styles.icon} />
          </Box>
        </ListItemAvatar>
        <Grid flexGrow={1}>
          <Typography className={styles.title}>{props.data.title}</Typography>
          <Typography className={styles.description}>
            {props.data.desc}
          </Typography>
        </Grid>
        <Box>
          <Typography className={styles.time} textAlign={"right"}>
            {props.data.time}
          </Typography>
          <Typography className={styles.tasks}>{props.data.tasks}</Typography>
        </Box>
      </ListItem>
      {!props.lastItem && <Divider />}
    </List>
  );
}
