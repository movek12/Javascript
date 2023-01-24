import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NewHeader1() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Grid>
                    <Button>Home</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NewHeader1