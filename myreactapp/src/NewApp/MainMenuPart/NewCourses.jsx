import { Button, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function NewCourses() {
    const handleClick = () => {};
  return (
    <>
    <main>
        <Box>
            <Button 
            variant='outlined' 
            sx={{height:70, width: 90, bgcolor:'silver',color:'white'}}
            onClick={handleClick}
            >
                Courses
            </Button>
            <Menu>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </Menu>
        </Box>
    </main>
    </>
  )
}

export default NewCourses