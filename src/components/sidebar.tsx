"use client";

import * as React from "react";
import { CssBaseline } from "@mui/material";
import AppBarComponent from "@/components/AppBar";
import DrawerComponent from "@/components/Drawer";

export default function SideBar() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  return (
    <>
      <CssBaseline />
      <AppBarComponent
        open={open}
        toggleDrawer={toggleDrawer}
        anchorEl={anchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMenuClose={handleMenuClose}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
      />
      <DrawerComponent open={open} />
    </>
  );
}
