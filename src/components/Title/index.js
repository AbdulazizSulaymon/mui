import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => {
  console.log(theme);
  return {
    title: {
      background:
        theme.palette.mode === "light"
          ? "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)"
          : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
  };
});

export default function Title() {
  const classes = useStyle();

  return (
    <>
      <Typography
        component={"h2"}
        variant="h1"
        className={classes.title}
        // sx={{ display: { xs: "none", md: "block" } }}
      >
        Dark Languages
      </Typography>
      <Typography
        component={"h2"}
        variant="h1"
        // sx={{ display: { xs: "none", md: "block" } }}
      >
        Light Languages
      </Typography>
    </>
  );
}
