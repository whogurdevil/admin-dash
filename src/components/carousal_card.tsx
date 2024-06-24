"use client";
import React, { useState, useEffect } from "react";
import { Card, Grid, Typography, Box, Button, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";
import styles from "@/styles/CarousalCard.module.scss"; // Import the SCSS module

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  marginTop: 10,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#00D25B" : "#00D25B",
  },
}));

const imageUrls = [
  "https://picsum.photos/id/13/1800/1667.jpg",
  "https://picsum.photos/id/85/1280/774.jpg",
  "https://picsum.photos/id/612/2731/1536.jpg",
];

export default function CarousalCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Card className={styles.card}>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" className={styles.typography}>
          Portfolio Slide
        </Typography>
        <Box flexGrow={1} />
        <Box>
          <IconButton onClick={handlePrev} size="small">
            <ArrowCircleLeftRounded />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ArrowCircleRightRounded />
          </IconButton>
        </Box>
      </Grid>
      {isMounted && (
        <Carousel
          index={currentIndex}
          autoPlay={false}
          navButtonsAlwaysVisible={false}
          indicators={false}
        >
          {imageUrls.map((url, index) => (
            <Box key={index} className={styles.imageBox}>
              <img
                src={url}
                alt={`Landscape ${index + 1}`}
                className={styles.image}
              />
            </Box>
          ))}
        </Carousel>
      )}
      <List className={styles.list} sx={{ backgroundColor: "#1d1f25" }}>
        <ListItem alignItems="flex-start" className={styles.listItem}>
          <ListItemAvatar>
            <Avatar
              alt="CeeCee Bass"
              src={"https://randomuser.me/api/portraits/men/39.jpg"}
            />
          </ListItemAvatar>
          <ListItemText
            primary="CeeCee Bass"
            secondary={
              <Typography fontSize={"small"} className={styles.secondaryText}>
                Well it seems to working right now.
              </Typography>
            }
          />
          <Typography fontSize={"small"} className={styles.timeText}>
            4 hours ago
          </Typography>
        </ListItem>
        <ListItem alignItems="flex-start" className={styles.listItem}>
          <ListItemText
            color="grey"
            primary={
              <Typography fontSize={"small"} className={styles.secondaryText}>
                Well it seems to working right now.
              </Typography>
            }
            secondary={
              <BorderLinearProgress variant="determinate" value={50} />
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}
