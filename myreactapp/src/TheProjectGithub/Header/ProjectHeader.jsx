import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ProjectSubHeader from "../SubHeader/ProjectSubHeader";
import {  useNavigate } from "react-router-dom";

const ProjectHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ bgcolor: "black" }}>
            <IconButton
             edge="start" 
             sx={{ mr: 2, color: "white" }}
             onClick={()=> navigate('/')}
             >
              <GitHubIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
            <TextField
              size="small"
              label="Search....."
              InputProps={{
                style: {
                  color: 'white',
                  width: 300,
                  borderRadius: '8px',
                  borderColor: 'white',
              }
               }}
            />
            <Button
              sx={{ mr: 2, ml: 2, textTransform: "none", color: "white" }}
            >
              Pull requests
            </Button>
            <Button sx={{ mr: 2, textTransform: "none", color: "white" }}>
              Issues
            </Button>
            <Button sx={{ mr: 2, textTransform: "none", color: "white" }}>
              Codespaces
            </Button>
            <Button sx={{ mr: 2, textTransform: "none", color: "white" }}>
              Marketplace
            </Button>
            <Button sx={{ mr: 2, textTransform: "none", color: "white" }}>
              Explore
            </Button>

            <IconButton size="larger" sx={{ ml: "auto", color: "white" }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton size="larger" sx={{ ml: 1, color: "white" }}>
              <AddIcon />
            </IconButton>
            <IconButton size="larger" sx={{ mr: 2, ml: 1, color: "white" }}>
              <PersonPinIcon />
            </IconButton>
          </Toolbar>
          <ProjectSubHeader />
        </AppBar>
      </Box>
    </>
  );
};

export default ProjectHeader;
