import HomeCard from "@/app/_components/home_card";
import { homeCardType } from "../_types/home";
import { Grid } from "@mui/material";
import TransactionHistoryCard from "../_components/transaction_history_card";

const cardData = [
  {
    id: 0,
    title: "$12.34",
    addition: "+3.5%",
    context: "Potential Growth",
    growth: true,
  },
  {
    id: 1,
    title: "$17.34",
    addition: "+11%",
    context: "Revenue Current",
    growth: true,
  },
  {
    id: 2,
    title: "$12.34",
    addition: "-2.4%",
    context: "Daily Income",
    growth: false,
  },
  {
    id: 3,
    title: "$31.54",
    addition: "+3.5%",
    context: "Expense Current",
    growth: true,
  },
];

const donutData = {
  labels: ["Cash", "Paypal", "Stripe"],
  datasets: [
    {
      data: [20, 25, 55],
      backgroundColor: ["#FFAB00", "black", "#00D25B"],
      borderWidth: 0,
    },
  ],
};

const donutCardData = [
  {
    title: "Transfer to Paypal",
    desc: "07 Jan 2019, 09:12AM",
    amount: "$236",
  },
  {
    title: "Transfer to stripe",
    desc: "07 Jan 2019, 09:12AM",
    amount: "$593",
  },
];

export default function Page() {
  return (
    <Grid container padding={0} spacing={3}>
      {cardData.map((data: homeCardType) => (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
          <HomeCard data={data} />
        </Grid>
      ))}
      <Grid item xs={16} sm={8} md={4}>
        <TransactionHistoryCard data={donutData} cardData={donutCardData} />
      </Grid>
    </Grid>
  );
}
