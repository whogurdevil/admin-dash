"use client";

import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartCard from "./chart_card";

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
    <Card sx={{ padding: 2, minWidth: "600px" }}>
      <Typography variant="h6" fontWeight={"bold"}>
        Transaction History
      </Typography>
      <Box sx={{ paddingX: "100px" }}>
        <Doughnut
          data={props.data}
          options={{ cutout: 98 }}
          plugins={[centerTextPlugin]}
        />
      </Box>
      {props.cardData.map((data) => (
        <Grid item xs={12} sm={6} md={3} paddingTop={2}>
          <ChartCard data={data} />
        </Grid>
      ))}
    </Card>
  );
}
