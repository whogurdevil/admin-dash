"use client";

import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TransferCard from "./transfer_card";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: any) => {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();

    // Draw bold and large text
    ctx.fillStyle = "white";
    ctx.font = "bolder 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("$1200", width / 2, height / 2 + 10);

    // Draw small and normal text
    ctx.fillStyle = "grey";
    ctx.font = "normal 12px Arial";
    ctx.fillText("Total", width / 2, height / 2 + 50);

    ctx.restore();
  },
};

export default function DonutCard(props: any) {
  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        Transaction History
      </Typography>
      <Box
        sx={{
          width: "280px",
          display: "flex",
          justifyContent: "center",
          paddingY: 2,
        }}
      >
        <Doughnut
          data={props.data}
          options={{ cutout: 95, responsive: true }}
          plugins={[centerTextPlugin]}
        />
      </Box>
      {props.cardData.map((data: any, index: any) => (
        <TransferCard data={data} key={index} />
      ))}
    </Card>
  );
}
