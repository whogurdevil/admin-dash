import { Box, Typography } from "@mui/material";
import React from "react";
import adImage from "@/assets/Group126@2x.png";

export default function AdvertisementCard() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to left, #d41459, #911a6c);",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          padding: 0,
          marginLeft: 2,
          display: "flex",
          flex: "0 0 16.66667",
        }}
      >
        <img src={adImage.src} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 8,
          }}
        >
          <Typography fontSize={"1.125rem"} fontWeight={"500"}>
            Want even more features?
          </Typography>
          <Typography fontSize={"small"}>
            Check out our Pro version with 5 unique layouts!
          </Typography>
        </Box>
      </Box>
      <Box
        component={"a"}
        href="/home"
        sx={{
          fontSize: "0.75rem",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          fontWeight: 500,
          padding: "0.9375rem 1.0625rem",
          borderRadius: "50px",
          textDecoration: "none",
          color: "white",
          alignSelf: "center",
          marginRight: 5,
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        Upgrade to PRO
      </Box>
    </Box>
  );
}
