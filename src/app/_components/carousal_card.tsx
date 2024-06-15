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
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";

// Array of random landscape image URLs
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
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"} paddingBottom={2}>
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
            <Box
              key={index}
              sx={{
                display: "flex",
                height: "300px",
                justifyContent: "center",
                overflow: "hidden", // Clip any overflow
              }}
            >
              <img
                src={url}
                alt={`Landscape ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Carousel>
      )}
      <List
        sx={{ width: "100%", bgcolor: "Background.default", paddingTop: 2 }}
      >
        <ListItem alignItems="flex-start" sx={{ paddingX: 0 }}>
          <ListItemAvatar>
            <Avatar
              alt="CeeCee Bass"
              src={"https://randomuser.me/api/portraits/men/39.jpg"}
            />
          </ListItemAvatar>
          <ListItemText
            primary="CeeCee Bass"
            secondary={
              <Typography color={"grey"}>
                Well it seems to working right now.
              </Typography>
            }
          />
          <Typography color={"grey"}>4 hours ago</Typography>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}
