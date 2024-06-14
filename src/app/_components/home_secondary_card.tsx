import React from "react";
import { homeCardType } from "../_types/home";
import { Card, Typography, Box, Chip, Icon } from "@mui/material";
import { CallMade, CallReceived } from "@mui/icons-material";

export default function SecondaryHomeCard(props: any) {
  return (
    <Card sx={{ padding: 3 }}>
      <Typography fontWeight={"bold"}>{props.data.topic}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ marginRight: 1 }}>
          {props.data.title}
        </Typography>
        <Typography
          fontWeight="bold"
          color={props.data.growth ? "#00d25b" : "error"}
          sx={{ marginRight: 1 }}
        >
          {props.data.addition}
        </Typography>
        <Box flexGrow={1} />
        <Icon
          sx={{
            borderColor: props.data.growth ? "success.main" : "error.main",
            color: props.data.growth ? "success.main" : "error.main",
            display: "flex",
            alignItems: "center",
            marginRight: 1,
          }}
        >
          <props.data.icon />
        </Icon>
      </Box>
      <Typography>{props.data.context} </Typography>
    </Card>
  );
}
