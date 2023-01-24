import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import LinkButtons from './LinkButtons'

function PaperOfTheHomepage() {
  return (
    <>
    <Grid container justifyContent={'center'}>
        <Grid item>
          <Paper sx={{ elevation: 100, width: 700, height: 700 }}>
            <Typography variant="h2">Home</Typography>
            <Typography textAlign={'left'} sx={{ mt: 3, mr:3 , ml:3 }}>
              Created in Nepal in 1994, Alliance Française de Katmandou promotes
              the French language by offering French classes that are open to
              all. For the last 26 years, it has been the only certified French
              institute in Nepal.
            </Typography>
            <Typography textAlign={'left'} sx={{ mt: 3 , mr:3 , ml:3 }}>
              Alliance Française de Katmandou aims at spreading the Francophone
              culture by organizing cultural events and our French Bistrot which
              promotes both diversity and intercultural dialogue. Furthermore,
              it offers its students free access to its in-house media center.
            </Typography>
            <Typography textAlign={'left'} sx={{ mt: 3 , mr:3 , ml:3}}>
              Annually Alliance Française de Katmandou welcomes around 2,500
              students and more than 10,000 visitors attend our cultural events.
              AFK is the best place to learn French or simply want to immerse
              yourself in the French culture right here in Kathmandu!
            </Typography>
            <LinkButtons/>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default PaperOfTheHomepage