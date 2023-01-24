import {
  AppBar,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import About from "./About";
import Footer from "./Footer";

function Header() {
  return (
    <>
      <About />
      <Footer />
      <AppBar color="secondary" sx={{ height: 100 }}>
        <Toolbar container alignItems="center" sx={{ margin: "auto 30px" }}>
          <Grid container>
            <Typography variant="h3">
              Vrit Jobs{/* <SearchIcon sx={{ fontSize: 50 }} /> */}
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <Grid item>
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer", color: "#123456" }}
                component={Link}
                to="/about-us"
              >
                About us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                Find jobs
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                Contact us
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <TextField
              id="outlined-basic"
              label="Search Job Here"
              variant="standard"
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
