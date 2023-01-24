import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CssBaseline,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function LoginMenu() {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <> 
    <CssBaseline/>
    <Box>

      <Button onClick={handleClick}>
        <Avatar />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2,
            "&.MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 5,
              
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal:'right', vertical:'top' }}
        anchorOrigin={{ horizontal:'left', vertical:'buttom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My Account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon> Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" /> 
          </ListItemIcon>Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon> Logout
        </MenuItem>
      </Menu>
    </Box>
    </>
  );
}

export default LoginMenu;
