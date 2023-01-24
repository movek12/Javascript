import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import NatIcon from "@mui/icons-material/Nat";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import VisibilityIcon from '@mui/icons-material/Visibility';
import UsbSharpIcon from '@mui/icons-material/UsbSharp';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import { useNavigate } from "react-router-dom";

function ProjectSubHeader() {
  const navigate = useNavigate();
  const handleCode =() => {
    navigate('Code');
  }
  return (
    <>
      <Box>
        <Toolbar sx={{ bgcolor: "#d1efee", height: 80 }}>
          <Box>
            <Box display={"flex"} sx={{ flexGrow: 1 }}>
              <Typography variant="h5" color={"black"}>
                facebook
              </Typography>
              <Typography variant="h5" color={"black"}>
                /
              </Typography>
              <Typography variant="h5" color={"black"}>
                react
              </Typography>
            {/* Frist three Buttons */}
            {/* First Button */}
              <Button
                variant=""
                sx={{
                  textTransform: "none",
                  ml: "auto",
                  color: "black",
                  border: 1,
                  borderColor: "silver",
                }}
              >
                <VisibilityIcon sx={{ mr: 1 }}/>
                Watch
              </Button>
              {/* second button */}
              <Button
                variant=""
                sx={{
                  textTransform: "none",
                  mr: 2,
                  ml: 2,
                  color: "black",
                  border: 1,
                  borderColor: "silver",
                }}
              >
                <UsbSharpIcon sx={{ mr: 1 }}/>
                Fork
              </Button>
              {/* Third Button */}
              <Button
                sx={{
                  textTransform: "none",
                  mr: 2,
                  color: "black",
                  border: 1,
                  borderColor: "silver",
                }}
              >
                <StarBorderPurple500SharpIcon sx={{ mr: 1 }}/>
                Starred
              </Button>
            </Box>
            {/* Second Row*/}
            {/* first Button */}
            <Box>
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
                onClick={handleCode}
              >
                <CodeIcon sx={{ mr: 1 }} />
                Code
              </Button>
              {/* Second Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
                onClick={()=>navigate('Issues')}
              >
                <ModeStandbyIcon sx={{ mr: 1 }} />
                Issues
              </Button>
              {/* Third Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <NatIcon sx={{ mr: 1 }} />
                Pull requests
              </Button>
              {/* Fourth Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <PlayCircleOutlineIcon sx={{ mr: 1 }} />
                Actions
              </Button>
              {/* Fifth Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <ImportantDevicesIcon sx={{ mr: 1 }} /> Projects
              </Button>
              {/* sixth Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <LocalLibraryIcon sx={{ mr: 1 }} />
                Wiki
              </Button>
              {/* seventh Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <AddModeratorIcon sx={{ mr: 1 }} />
                Security
              </Button>
              {/* eighth Button */}
              <Button
                variant="flat"
                sx={{ textTransform: "none", color: "black" }}
              >
                <QueryStatsIcon sx={{ mr: 1 }} />
                Insights
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}

export default ProjectSubHeader;
