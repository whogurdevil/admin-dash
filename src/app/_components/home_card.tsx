import React from "react";
import { homeCardType } from "../_types/home";
import { Card, Typography, Box, Chip, Icon } from "@mui/material";
import { CallMade, CallReceived } from "@mui/icons-material";

export default function Home(props: any) {
  return (
    <Card sx={{ minWidth: "150px", height: "120px", padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 1,
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
        <Chip
          variant="outlined"
          icon={
            props.data.growth ? (
              <CallMade color="inherit" />
            ) : (
              <CallReceived color="inherit" />
            )
          }
          sx={{
            borderColor: props.data.growth ? "success.main" : "error.main",
            color: props.data.growth ? "success.main" : "error.main",
            display: "flex",
            alignItems: "center",
            marginRight: 1,
          }}
        />
      </Box>
      <Typography>{props.data.context} </Typography>
    </Card>
  );
}
