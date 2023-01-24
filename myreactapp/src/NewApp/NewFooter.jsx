import { AppBar, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NewFooter() {
  return (
    <>
    <footer>
    {/* <Divider sx={{borderTop: '2px solid red'}}/>
    <br /> */}

        <AppBar position='relative' color='primary' sx={{ top: 'auto', bottom:0 }}>
            <Toolbar>
       <Typography justifyContent={'center'}>
            {`Copyright @ ${new Date().getFullYear()}. Escn Bagbazzar,Nepal`}
        </Typography>
            </Toolbar>
        </AppBar>
 
    </footer>
    </>
  )
}

export default NewFooter