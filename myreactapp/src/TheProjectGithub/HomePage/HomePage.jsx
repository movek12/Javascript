import { Typography } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa';
import React from 'react'

function HomePage() {
  return (
    <div>
        
        <SpaIcon sx={{ height:80,width: 90,mt: 5 }}/>
        <Typography variant='h1' sx={{ mt:8,mb:10}}>
            
            WELCOME TO THE HOMEPAGE
        </Typography>
    </div>
  )
}

export default HomePage