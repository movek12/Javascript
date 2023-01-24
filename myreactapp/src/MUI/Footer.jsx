import { Typography } from "@mui/material";
import React from "react";
function Footer() {
  return (
    <>
    <footer>
    <Typography>Footer</Typography>
      <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary">
        this is a footer section
        </Typography>
        <Typography variant="boday2" color={"textSecondary"} align="center">
            {`copyright @ ${new Date().getFullYear()}.`}
        </Typography>
    </footer>  
    </>
  );
}

export default Footer;
