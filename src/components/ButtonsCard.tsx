import { Button, Card, Link, Typography, Grid } from "@mui/material";
import React from "react";
import styles from "@/styles/ButtonsCard.module.scss";
import Buttons from "./Buttons";

const normalButtons = [
  {
    text: "Primary",
    color: "primary",
  },
  {
    text: "Secondary",
    color: "inherit",
  },
  {
    text: "Success",
    color: "success",
  },
  {
    text: "Error",
    color: "error",
  },
  {
    text: "Warning",
    color: "warning",
  },
  {
    text: "Secondary",
    color: "secondary",
  },
  {
    text: "Inherit",
    color: "info",
  },
  {
    text: "Black",
    color: "custom.black", // Custom color
  },
];

export default function ButtonsCard() {
  return (
    <Card className={styles.card}>
      <Typography variant="h6" fontWeight={"bold"}>
        Normal Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>.btn-{`{color}`}</span>
        {" for buttons in theme colors"}
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        <Buttons data={normalButtons} varient={"contained"} />
      </Grid>

      <Typography variant="h6" fontWeight={"bold"}>
        Outlined Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>
          {".btn-inverse-{color} for inverse buttons"}
        </span>
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        <Buttons data={normalButtons} varient={"outlined"} />
      </Grid>

      <Typography variant="h6" fontWeight={"bold"}>
        Text Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>.btn-outline-{`{color}`}</span>
        {" for outlined borders"}
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        <Buttons data={normalButtons} varient={"text"} />
      </Grid>
    </Card>
  );
}
