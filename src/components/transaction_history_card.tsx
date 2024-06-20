"use client";

import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import TransferCard from "./transfer_card";
import styles from "@/styles/TransactionHistoryCard.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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

const TransactionHistoryCard = (props: any) => {
  return (
    <Card className={styles.card}>
      <Typography variant="h6" className={styles.title} fontWeight="bold">
        Transaction History
      </Typography>
      <Box className={styles["chart-container"]}>
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
};

export default TransactionHistoryCard;
