import HomeCard from "@/components/home_card";
import { homeCardType } from "@/types/home";
import { Grid } from "@mui/material";
import TransactionHistoryCard from "@/components/transaction_history_card";
import OpenProjectsCard from "@/components/open_projects_card";
import CarousalCard from "@/components/carousal_card";

import {
  CurrencyRupee,
  BusinessCenterOutlined,
  TvOutlined,
  HomeRepairService,
  HomeRepairServiceOutlined,
} from "@mui/icons-material";
import SecondaryHomeCard from "@/components/home_secondary_card";
import OrdersTable from "@/components/home_table";
import MessagesCard from "@/components/messages_card";
import TodoListComponent from "@/components/todo_list";
import CountriesCard from "@/components/countries_card";

const cardData = [
  {
    id: 0,
    title: "$12.34",
    addition: " +3.5%",
    context: "Potential Growth",
    growth: true,
  },
  {
    id: 1,
    title: "$17.34",
    addition: " +11%",
    context: "Revenue Current",
    growth: true,
  },
  {
    id: 2,
    title: "$12.34",
    addition: " -2.4%",
    context: "Daily Income",
    growth: false,
  },
  {
    id: 3,
    title: "$31.54",
    addition: " +3.5%",
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
const secondaryCardData = [
  {
    topic: "Revenue",
    title: "$32123",
    context: "11.38% since last month",
    addition: "+3.5%",
    growth: true,
    icon: HomeRepairServiceOutlined,
    color: "primary",
  },
  {
    topic: "Sales",
    title: "$45850",
    context: "9.61% since last month",
    addition: "+8.3%",
    growth: true,
    icon: BusinessCenterOutlined,
    color: "success",
  },
  {
    topic: "Purchase",
    title: "$2039",
    context: "2.27% Since last month",
    addition: "-2.1%",
    growth: false,
    icon: TvOutlined,
    color: "error",
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
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={12} md={4}>
          <TransactionHistoryCard data={donutData} cardData={donutCardData} />
        </Grid>
        <Grid item xs={20} md={8}>
          <OpenProjectsCard />
        </Grid>
      </Grid>
      {secondaryCardData.map((data, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <SecondaryHomeCard data={data} />
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <OrdersTable />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <MessagesCard />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CarousalCard />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <TodoListComponent />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <CountriesCard />
      </Grid>
    </Grid>
  );
}
