import { AppBar, CssBaseline, Typography, Toolbar, Container,Grid,Button,CardContent,CardMedia,CardActionArea,Card, } from '@mui/material';
import React from 'react'
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function BreakPoits() {
  return (
    //addtional div wont be added in DOM
    //typography to edit texts
    <>
    <CssBaseline/>
    <AppBar position='relativ'>
        <Toolbar>
            {/* <TextSnippetIcon/> */}
            <Typography variant='h6' align='center'/>Posts<Typography/>
            <Typography>Description Here</Typography>
        </Toolbar>
    </AppBar>
    <main>
        <Grid>
        <Container>
            <Typography variant='h3'>
                Posts
            </Typography>
            <Typography>
                Description here
            </Typography>
        </Container>
        <Grid container justifyContent='center'>
        <Grid item>
            <Button variant='contained'>Primary Button</Button>
        </Grid>
        <Grid item>
            <Button variant='outlined'>Secondary</Button>
        </Grid>
        </Grid>
        </Grid>
        <Container>
            <Grid container spacing={4}>
                <Grid>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid >
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
            </Grid>
        </Container>
    </main>
    </>
  );
};

export default BreakPoits;