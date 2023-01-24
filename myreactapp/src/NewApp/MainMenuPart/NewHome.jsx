import { Button, CssBaseline, Menu, MenuItem } from "@mui/material";

import React from "react";

function Header2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event);
    //currentTarget is refers to the element that is being handled currently
    // whereas target refers to the element that initiated event
    //in this case both refers to the same element, coz the event is not propagated and handled by any other element
    //     for Example:
    //     <div onClick={handleClick}>
    //     <button>Button 1</button>
    //     <button>Button 2</button>
    //   </div>
    //   here: if B1 is clicked then, function will be called and the element will be event.target and if B2, event.currentTarget
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <Button
        variant="contained"
        sx={{ height: 70, width: 90, bgcolor: "silver" }}
        onClick={handleClick}
      >
        Home
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            bgcolor: "black",
            height: 200,
            width: 200,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Button sx={{ color: "white" }}>About</Button>
        </MenuItem>
        <MenuItem>
          <Button>Courses</Button>
        </MenuItem>
        <MenuItem>
          <Button>Services</Button>
        </MenuItem>
        <MenuItem>
          <Button>Contact</Button>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header2;
