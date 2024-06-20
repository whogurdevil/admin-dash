import React from "react";
import { Card, Typography, Box, Chip } from "@mui/material";
import { CallMade, CallReceived } from "@mui/icons-material";
import styles from "@/styles/HomeCard.module.scss"; // Import the SCSS module

export default function HomeCard(props: any) {
  return (
    <Card className={styles.card}>
      <Box className={styles.headerBox}>
        <Typography variant="h5" className={styles.title}>
          {props.data.title}
        </Typography>
        <Typography
          className={`${styles.addition} ${props.data.growth ? styles.growth : styles.error}`}
        >
          {props.data.addition}
        </Typography>
        <Box className={styles.flexGrow} />
        <Chip
          variant="outlined"
          icon={
            props.data.growth ? (
              <CallMade color="inherit" />
            ) : (
              <CallReceived color="inherit" />
            )
          }
          className={`${styles.chip} ${props.data.growth ? styles.growthBorder : styles.errorBorder}`}
        />
      </Box>
      <Typography>{props.data.context} </Typography>
    </Card>
  );
}
