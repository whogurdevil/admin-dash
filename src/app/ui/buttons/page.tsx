import { Typography, Box } from "@mui/material";
import React from "react";
import ButtonsCard from "@/components/ButtonsCard";

export default function Page() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography fontWeight="bold" variant="h6">
        Buttons
      </Typography>
      <ButtonsCard />
    </Box>
  );
}
