import * as React from "react";
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
import { SelectAll, CheckBoxOutlineBlank } from "@mui/icons-material";

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
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Actions</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Client Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Order No</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Product Cost</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Project</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Payment Mode</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Start Date</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Payment Status</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <IconButton>
                  <CheckBoxOutlineBlank />
                </IconButton>
              </TableCell>
              <TableCell>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar alt={row.clientName} src={row.avatarSrc} />
                  </Grid>
                  <Grid item>
                    <Typography>{row.clientName}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.productCost}</TableCell>
              <TableCell>{row.project}</TableCell>
              <TableCell>{row.paymentMode}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>
                {row.paymentStatus === "Paid" ? (
                  <Button variant={"outlined"} color="success">
                    Approved
                  </Button>
                ) : (
                  <Button variant={"outlined"} color="warning">
                    Pending
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
