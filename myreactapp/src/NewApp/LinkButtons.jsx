import { Button, CssBaseline, Grid, SvgIcon } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LinkButtons= () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2} justifyContent="center" sx={{mt:4 }}>
        <Grid item>
          <Button variant="outlined" sx={{ bgcolor: "black" }}>
            <SvgIcon sx={{ color: "white", height: 40 }}>
              <FacebookOutlinedIcon />
            </SvgIcon>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ bgcolor: "black" }}>
            <SvgIcon sx={{ color: "white", height: 40 }}>
              <InstagramIcon />
            </SvgIcon>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ bgcolor: "black" }}>
            <SvgIcon sx={{ color: "white", height: 40 }}>
              <TwitterIcon />
            </SvgIcon>
          </Button>
        </Grid>
        <Grid item>
          {" "}
          <Button variant="outlined" sx={{ bgcolor: "black" }}>
            <SvgIcon sx={{ color: "white", height: 40 }}>
              <WhatsAppIcon />
            </SvgIcon>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default LinkButtons;
