import React from "react";
import { Card, Typography, Box } from "@mui/material";
import styles from "@/styles/TransferCard.module.scss";

const TransferCard = (props: any) => {
  return (
    <Card variant="outlined" className={styles.card}>
      <Box className={styles["left-box"]}>
        <Typography className={styles.title} fontWeight="bold">
          {props.data.title}
        </Typography>
        <Typography className={styles.description} color="grey">
          {props.data.desc}
        </Typography>
      </Box>
      <Box className={styles["right-box"]}>
        <Typography className={styles.amount} variant="h6">
          {props.data.amount}
        </Typography>
      </Box>
    </Card>
  );
};

export default TransferCard;
