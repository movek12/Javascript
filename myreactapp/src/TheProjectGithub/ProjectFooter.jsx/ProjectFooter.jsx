import { Copyright, GitHub } from '@mui/icons-material'
import { IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectFooter() {
  const navigate = useNavigate();
  return (
    <>
    <Toolbar sx={{bgcolor: '#a5deee'}} >
       <Toolbar sx={{ flexGrow:2}}>
        <IconButton onClick={()=>navigate('/')}>
        <GitHub fontSize='large'/>
        </IconButton>
       <Copyright/>
        <Typography>
            {`${new Date().getFullYear()}GitHub, Inc.`}
        </Typography>
       </Toolbar>
        <Box display={'flex'} sx={{ flexGrow: 2}}>
            <Typography sx={{ml:3}}>Terms</Typography>
            <Typography sx={{ml:3}}>Privacy</Typography>
            <Typography sx={{ml:3}}>Security</Typography>
            <Typography sx={{ml:3}}>Status</Typography>
            <Typography sx={{ml:3}}>Docs</Typography>
            <Typography sx={{ml:3}}>Contact GitHub</Typography>
            <Typography sx={{ml:3}}>Pricing</Typography>
            <Typography sx={{ml:3}}>Api</Typography>
            <Typography sx={{ml:3}}>Training</Typography>
            <Typography sx={{ml:3}}>Blog</Typography>
            <Typography sx={{ml:3}}>About</Typography>
        </Box>
    </Toolbar>
    </>
  )
}

export default ProjectFooter