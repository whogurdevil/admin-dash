"use client";

import React from "react";
import Messagetile from "./message_tile";
import { Card, Grid, Typography, Box } from "@mui/material";

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
  {
    avatarImage: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "David Wilson",
    time: "2 hours ago",
    message: "Project deadline is approaching.",
  },
  {
    avatarImage: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Sophia Lee",
    time: "3 hours ago",
    message: "Please check your email for updates.",
  },
];

export default function MessageCard() {
  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Messages
        </Typography>
        <Box flexGrow={1} />
        <Typography color={"grey"}>View All</Typography>
      </Grid>
      {messagesData.map((data, index) => (
        <Messagetile data={data} key={index} />
      ))}
    </Card>
  );
}
