import React from "react";
import { Box, Typography } from "@mui/material";
import DropdownCard from "@/components/DropdownCard";

export default function page() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography fontWeight="bold" variant="h6">
        Buttons
      </Typography>
      <DropdownCard />
    </Box>
  );
}
