import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Typography,
  IconButton,
  Grid,
  Card,
  Button,
} from "@mui/material";
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import styles from "@/styles/OrdersTable.module.scss"; // Import the SCSS module

// Sample data
const rows = [
  {
    id: 1,
    clientName: "John Doe",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    orderNo: "ORD001",
    productCost: "$500",
    project: "Project X",
    paymentMode: "Credit Card",
    startDate: "2023-01-15",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
    orderNo: "ORD002",
    productCost: "$700",
    project: "Project Y",
    paymentMode: "PayPal",
    startDate: "2023-02-01",
    paymentStatus: "Pending",
  },
  {
    id: 3,
    clientName: "Michael Johnson",
    avatarSrc: "https://randomuser.me/api/portraits/men/33.jpg",
    orderNo: "ORD003",
    productCost: "$300",
    project: "Project Z",
    paymentMode: "Bank Transfer",
    startDate: "2023-02-05",
    paymentStatus: "Paid",
  },
  {
    id: 4,
    clientName: "Emily Brown",
    avatarSrc: "https://randomuser.me/api/portraits/women/33.jpg",
    orderNo: "ORD004",
    productCost: "$400",
    project: "Project A",
    paymentMode: "Credit Card",
    startDate: "2023-02-10",
    paymentStatus: "Pending",
  },
  {
    id: 5,
    clientName: "David Wilson",
    avatarSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    orderNo: "ORD005",
    productCost: "$600",
    project: "Project B",
    paymentMode: "PayPal",
    startDate: "2023-02-15",
    paymentStatus: "Paid",
  },
  {
    id: 6,
    clientName: "Sophia Lee",
    avatarSrc: "https://randomuser.me/api/portraits/women/34.jpg",
    orderNo: "ORD006",
    productCost: "$800",
    project: "Project C",
    paymentMode: "Bank Transfer",
    startDate: "2023-02-20",
    paymentStatus: "Pending",
  },
];

export default function OrdersTable() {
  return (
    <Card className={styles.card}>
      <Typography className={styles.heading} variant="h6">
        Order Status
      </Typography>
      <div className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Actions
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Client Name
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Order No
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Product Cost
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Project
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Payment Mode
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Start Date
                </Typography>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Typography variant="h6" className={styles.tableTypography}>
                  Payment Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className={styles.tableRow}>
                <TableCell className={styles.tableCell}>
                  <IconButton>
                    <CheckBoxOutlineBlank />
                  </IconButton>
                </TableCell>
                <TableCell className={styles.tableCell}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar alt={row.clientName} src={row.avatarSrc} />
                    </Grid>
                    <Grid item>
                      <Typography className={styles.tableTypography}>
                        {row.clientName}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.orderNo}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.productCost}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.project}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.paymentMode}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.startDate}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  <Button
                    variant={"outlined"}
                    color={row.paymentStatus === "Paid" ? "success" : "warning"}
                    className={styles.statusButton}
                  >
                    {row.paymentStatus === "Paid" ? "Approved" : "Pending"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
