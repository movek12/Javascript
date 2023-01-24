import { AppBar, Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Code() {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar sx={{  height: 180, bgcolor:'#d1efee'}}>
            <Box sx={{ flexGrow:2 }} display='flex'>
            <img
              src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"
              alt=""
            />
            <Typography variant="h6" color={'green'} mt={4.5} ml={2}>spoonacular API</Typography>
            </Box>
            <Box sx={{ flexGrow:1 }} display='flex'>
                <Button sx={{ mr:2,color:'Black' }}>Overview</Button>
                <Button sx={{ mr:2,color:'Black' }}>DOCS</Button>
                <Button sx={{ mr:2,color:'Black' }}>Pricing</Button>
                <Button sx={{ mr:2,color:'Black' }}>Terms</Button>
                <Button sx={{ mr:2,color:'Black' }}>applications</Button>
                <Button sx={{ mr:2,color:'Black',bgcolor:'green',borderRadius: 3 }}>Start Now</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Code;
