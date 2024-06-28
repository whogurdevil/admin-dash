import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "@/styles/MessageMenuList.module.scss"; // Import the SCSS module

export default function MessageMenuList(props: any) {
  return (
    <List className={styles.list} sx={{ backgroundColor: "#191c24" }}>
      <ListItem
        alignItems="flex-start"
        className={styles.listItem}
        sx={{ paddingX: 2, paddingY: 0 }}
      >
        <ListItemAvatar>
          <Avatar alt={props.data.name} src={props.data.avatarImage} />
        </ListItemAvatar>
        <ListItemText
          primary={props.data.name}
          secondary={
            <Typography fontSize={"small"} className={styles.secondaryText}>
              {props.data.message}
            </Typography>
          }
        />
        <Typography fontSize={"small"} className={styles.time}>
          {props.data.time}
        </Typography>
      </ListItem>
      <Divider />
    </List>
  );
}
