import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function MessagesCard(props) {
  return (
    <List sx={{ width: "100%", bgcolor: "Background.default" }}>
      <ListItem
        alignItems="flex-start"
        sx={{
          paddingX: 0,
        }}
      >
        <ListItemAvatar>
          <Avatar alt={props.data.name} src={props.data.avatarImage} />
        </ListItemAvatar>
        <ListItemText
          primary={props.data.name}
          secondary={
            <Typography color={"grey"}>{props.data.message}</Typography>
          }
        />
        <Typography color={"grey"}>{props.data.time}</Typography>
      </ListItem>
      <Divider />
    </List>
  );
}
