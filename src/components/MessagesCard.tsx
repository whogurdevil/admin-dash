"use client";

import React from "react";
import Messagetile from "./MessageTile";
import { Card, Grid, Typography, Box } from "@mui/material";
import styles from "@/styles/MessageCard.module.scss"; // Import the SCSS module

const messagesData = [
  {
    avatarImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    time: "15 minutes ago",
    message: "Hey, how are you doing?",
  },
  {
    avatarImage: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Jane Smith",
    time: "1 hour ago",
    message: "Can we schedule a meeting?",
  },
  {
    avatarImage: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Michael Johnson",
    time: "35 minutes ago",
    message: "Please review the attached document.",
  },
  {
    avatarImage: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Emily Brown",
    time: "55 minutes ago",
    message: "Looking forward to our call.",
  },
];

export default function MessageCard() {
  return (
    <Card className={styles.card}>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight="bold">
          Messages
        </Typography>
        <Box flexGrow={1} />
        <Typography color="grey">View All</Typography>
      </Grid>
      {messagesData.map((data, index) => (
        <Messagetile data={data} key={index} />
      ))}
    </Card>
  );
}
