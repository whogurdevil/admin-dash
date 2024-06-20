// OpenProjectsCard.jsx

import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import ListTiles from "./list_tile";
import {
  Description,
  CloudDownload,
  AccessTimeFilled,
  Drafts,
  PieChart,
} from "@mui/icons-material";
import styles from "@/styles/OpenProjectsCard.module.scss"; // Import SCSS module for styling

const listData = [
  {
    title: "Admin dashboard design",
    desc: "Broadcast web app mockup",
    time: "15 minutes ago",
    tasks: "30 tasks, 5 issues",
    color: "primary",
    icon: Description,
  },
  {
    title: "Wordpress Development",
    desc: "Upload new design",
    time: "1 hour ago",
    tasks: "30 tasks, 5 issues",
    color: "success",
    icon: CloudDownload,
  },
  {
    title: "Project meeting",
    desc: "New project discussion",
    time: "35 minutes ago",
    tasks: "15 tasks, 2 issues",
    color: "secondary",
    icon: AccessTimeFilled,
  },
  {
    title: "Broadcast Mail",
    desc: "Sent release details to team",
    time: "55 minutes ago",
    tasks: "35 tasks, 7 issues",
    color: "error",
    icon: Drafts,
  },
  {
    title: "UI Design",
    desc: "New application planning",
    time: "50 minutes ago",
    tasks: "27 tasks, 4 issues",
    color: "warning",
    icon: PieChart,
  },
];

export default function OpenProjectsCard(props: any) {
  return (
    <Card className={styles.card}>
      <Grid container flexDirection="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          Open Projects
        </Typography>
        <Box flexGrow={1} />
        <Typography color="grey">Your data status</Typography>
      </Grid>
      {listData.map((data, index) => (
        <ListTiles
          data={data}
          lastItem={index === listData.length - 1}
          key={index}
        />
      ))}
    </Card>
  );
}
