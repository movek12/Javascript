import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginMenu from "./LoginMenu";
import SearchIcon from "@mui/icons-material/Search";
function NewHeader() {
  const [inputValue,setInputValue]= useState('');
  return (
    <>
      <CssBaseline />

      <AppBar component="nav" sx={{ height: 80 }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" flexDirection={"column"}>
            <Box>
              <Typography variant="h4" component={"div"}>
                ESCN
              </Typography>
            </Box>
            <Box>Bagbazaar</Box>
          </Box>
          <Box display="flex" sx={{ ml: "auto", mr: 5, mt: 2.2 }}>
            <TextField
              InputProps={{
                endAdornment: inputValue ? null : (
                  <InputAdornment position="end">

                   <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              label='Search'
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "20px",
                    height: 50,
                    width: 250,
                  },
                },
              }}
            ></TextField>
          </Box>
          <LoginMenu />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NewHeader;
