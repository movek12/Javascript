import {
  AppBar,
  CssBaseline,
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Grid.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <CssBaseline />

      <AppBar sx={{ height: 100,bgcolor: 'red' }}>
        <Toolbar container sx={{ margin: "auto" }}>
          <Grid container>
            <Typography variant="h5">Begal Networks</Typography>
          </Grid>
          <Grid container justifyContent="flex-end">
            <TextField
              id="outlined-basic"
              label="Search Job Here"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container spacing={4}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                component={Link}
                to="/Home"
              >
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer", color: "#123456" }}
                component={Link}
                to="/AboutUs"
              >
                About us
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                component={Link}
                to="/UserClone"
              >
                Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                component={Link}
                to="/ContactUs"
              >
                Contact us
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
