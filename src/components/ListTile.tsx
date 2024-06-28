"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Typography, Box, Grid } from "@mui/material";
import styles from "@/styles/ListTile.module.scss"; // Import the SCSS module

interface ListTileProps {
  data: {
    color: string; // Assuming this is a color string like "#12141a"
    icon: React.ElementType;
    title: string;
    desc: string;
    time: string;
    tasks: string;
  };
  lastItem?: boolean;
  backgroundColor?: string; // New prop for background color
}

const ListTile: React.FC<ListTileProps> = ({
  data,
  lastItem = false, // Default to white if no backgroundColor prop is provided
}) => {
  return (
    <List className={styles.list}>
      <ListItem className={styles.listItem}>
        <ListItemAvatar className={styles.listItemAvatar}>
          <Box
            className={styles.avatarBox}
            sx={{ backgroundColor: `${data.color}.main` }}
          >
            <data.icon className={styles.icon} />
          </Box>
        </ListItemAvatar>
        <Grid flexGrow={1}>
          <Typography fontWeight={"bold"} className={styles.title}>
            {data.title}
          </Typography>
          <Typography className={styles.description}>{data.desc}</Typography>
        </Grid>
        <Box>
          <Typography className={styles.time} textAlign={"right"}>
            {data.time}
          </Typography>
          <Typography className={styles.tasks}>{data.tasks}</Typography>
        </Box>
      </ListItem>
      {!lastItem && <Divider />}
    </List>
  );
};

export default ListTile;
