"use client";

import React, { useState } from "react";
import { Card, Typography, Grid, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "@/styles/DropdownCard.module.scss";

const normalButtons = [
  {
    text: "Dropdown",
    color: "primary",
  },
  {
    text: "Dropdown",
    color: "inherit",
  },
  {
    text: "Dropdown",
    color: "success",
  },
  {
    text: "Dropdown",
    color: "error",
  },
  {
    text: "Dropdown",
    color: "warning",
  },
  {
    text: "Dropdown",
    color: "secondary",
  },
  {
    text: "Dropdown",
    color: "info",
  },
];

export default function ButtonsCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  return (
    <Card className={styles.card}>
      <Typography variant="h6" fontWeight={"bold"}>
        Normal Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>.btn-{`{color}`}</span>
        {" for buttons in theme colors"}
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        {normalButtons.map((button, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              color={button.color}
              endIcon={<ArrowDropDownIcon />}
              onClick={(event) => handleClick(event, index)}
            >
              {button.text}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuIndex === index}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{button.text} Option 1</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 2</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 3</MenuItem>
            </Menu>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" fontWeight={"bold"}>
        Outlined Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>
          {".btn-inverse-{color} for inverse buttons"}
        </span>
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        {normalButtons.map((button, index) => (
          <Grid item key={button.text}>
            <Button
              variant="outlined"
              color={button.color}
              endIcon={<ArrowDropDownIcon />}
              onClick={(event) => handleClick(event, index)}
            >
              {button.text}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuIndex === index}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{button.text} Option 1</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 2</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 3</MenuItem>
            </Menu>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" fontWeight={"bold"}>
        Text Buttons
      </Typography>
      <Typography className={styles.heading}>
        {"Add class "}
        <span className={styles.btnColor}>.btn-outline-{`{color}`}</span>
        {" for outlined borders"}
      </Typography>

      <Grid container spacing={2} justifyContent="left">
        {normalButtons.map((button, index) => (
          <Grid item key={button.text}>
            <Button
              variant="text"
              color={button.color}
              endIcon={<ArrowDropDownIcon />}
              onClick={(event) => handleClick(event, index)}
            >
              {button.text}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuIndex === index}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{button.text} Option 1</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 2</MenuItem>
              <MenuItem onClick={handleClose}>{button.text} Option 3</MenuItem>
            </Menu>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
