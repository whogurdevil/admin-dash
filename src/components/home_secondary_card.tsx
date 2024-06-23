import React from "react";
import { Card, Typography, Box, Icon } from "@mui/material";
import styles from "@/styles/SecondaryHomeCard.module.scss"; // Import the SCSS module

export default function SecondaryHomeCard(props: any) {
  return (
    <Card className={styles.card}>
      <Typography className={styles.topic} fontWeight="bold">
        {props.data.topic}
      </Typography>
      <Box className={styles.row}>
        <Box className={styles.textBox}>
          <Box className={styles.mainText}>
            <Typography variant="h5" className={styles.title} fontWeight="bold">
              {props.data.title}
            </Typography>
            <Typography
              fontWeight={"bold"}
              className={`${styles.addition} ${props.data.growth ? styles.growth : styles.error}`}
            >
              {props.data.addition}
            </Typography>
          </Box>
          <Typography className={styles.desc}>{props.data.context} </Typography>
        </Box>
        <Box className={styles.iconBox}>
          <Icon
            color={props.data.color}
            className={`${styles.icon} ${props.data.growth ? styles.growthBorder : styles.errorBorder}`}
            style={{ fontSize: "48px" }} // Making the icon larger
          >
            <props.data.icon fontSize={"inherit"} />
          </Icon>
        </Box>
      </Box>
    </Card>
  );
}
