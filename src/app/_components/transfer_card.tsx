import React from "react";
import { Card, Typography, Box } from "@mui/material";

export default function ChartCard(props: any) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        height: "80px",
        padding: 3,
        width: "100%",
        marginTop: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography fontWeight={"bold"}>{props.data.title}</Typography>
        <Typography color={"grey"}> {props.data.desc} </Typography>
      </Box>
      <Box>
        <Typography fontWeight={"bold"} variant="h6">
          {props.data.amount}
        </Typography>
      </Box>
    </Card>
  );
}
