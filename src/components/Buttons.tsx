import React from "react";
import { Grid, Button, Link } from "@mui/material";

export default function Buttons(props) {
  return (
    <>
      {props.data.map((item, index) => (
        <Grid item key={index} marginBottom={1}>
          <Button
            variant={props.varient}
            fullWidth
            color={item.color !== "custom.black" ? item.color : undefined}
            sx={
              item.color === "custom.black"
                ? {
                  minWidth: "200px",
                  backgroundColor:
                    props.varient === "contained" ? "black" : "",
                  borderColor: "black",
                  color: props.varient === "contained" ? "white" : "black",
                  "&:hover": { backgroundColor: "darkgrey" },
                }
                : { minWidth: "180px" }
            }
          >
            {item.text}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button fullWidth sx={{ minWidth: "180px" }}>
          <Link>Link</Link>
        </Button>
      </Grid>
    </>
  );
}
