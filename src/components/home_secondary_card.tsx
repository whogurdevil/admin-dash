import React from "react";
import { Card, Typography, Box, Icon } from "@mui/material";
import styles from "@/styles/SecondaryHomeCard.module.scss"; // Import the SCSS module

export default function SecondaryHomeCard(props: any) {
  return (
    <Card className={styles.card}>
      <Typography className={styles.topic} fontWeight="bold">
        {props.data.topic}
      </Typography>
      <Box className={styles.headerBox}>
        <Typography variant="h5" className={styles.title} fontWeight="bold">
          {props.data.title}
        </Typography>
        <Typography
          className={`${styles.addition} ${props.data.growth ? styles.growth : styles.error}`}
        >
          {props.data.addition}
        </Typography>
        <Box className={styles.flexGrow} />
        <Icon
          className={`${styles.icon} ${props.data.growth ? styles.growthBorder : styles.errorBorder}`}
        >
          <props.data.icon />
        </Icon>
      </Box>
      <Typography>{props.data.context} </Typography>
    </Card>
  );
}
