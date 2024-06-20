import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Typography,
  Card,
  Grid,
  Box,
} from "@mui/material";
import GlobeMap from "./global_map"; // Assuming GlobeMap component is correctly implemented
import styles from "@/styles/CountriesCard.module.scss"; // Import the SCSS module

const rows = [
  {
    flagSrc: "https://flagsapi.com/US/flat/64.png",
    country: "United States",
    code: "us",
    value: Math.floor(Math.random() * 1000) + 1,
    percentage: Math.floor(Math.random() * 100) + 1,
  },
  {
    flagSrc: "https://flagsapi.com/DE/flat/64.png",
    country: "Germany",
    code: "de",
    value: Math.floor(Math.random() * 1000) + 1,
    percentage: Math.floor(Math.random() * 100) + 1,
  },
  {
    flagSrc: "https://flagsapi.com/GB/flat/64.png",
    country: "United Kingdom",
    code: "gb",
    value: Math.floor(Math.random() * 1000) + 1,
    percentage: Math.floor(Math.random() * 100) + 1,
  },
  {
    flagSrc: "https://flagsapi.com/CA/flat/64.png",
    country: "Canada",
    code: "ca",
    value: Math.floor(Math.random() * 1000) + 1,
    percentage: Math.floor(Math.random() * 100) + 1,
  },
  {
    flagSrc: "https://flagsapi.com/AU/flat/64.png",
    country: "Australia",
    code: "au",
    value: Math.floor(Math.random() * 1000) + 1,
    percentage: Math.floor(Math.random() * 100) + 1,
  },
];

export default function CountriesCard() {
  return (
    <Card className={styles.card}>
      <Typography className={styles.title} variant="h6">
        Visitors By Countries
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.code}>
                  <TableCell>
                    <Avatar alt={row.country} src={row.flagSrc} />
                  </TableCell>
                  <TableCell>
                    <Typography>{row.country}</Typography>
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.percentage}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={styles.mapBox}>
            <GlobeMap data={rows} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
