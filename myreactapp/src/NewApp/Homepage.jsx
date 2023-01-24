import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PaperOfTheHomepage from "./PaperOfTheHomepage";
import NewHome from "./MainMenuPart/NewHome";
import NewCourses from "./MainMenuPart/NewCourses";

export default function ImgMediaCard() {
  return (
    <>
      <main>
        <Box display={"flex"} bgcolor="black" sx={{ height: 70}}>
          <NewHome />
          <NewCourses />
        </Box>
        <Box bgcolor={"whitesmoke"}>
          <Box>
            <img
              src="https://scontent.fktm19-1.fna.fbcdn.net/v/t1.6435-9/143502268_859056431305954_5670960986123949534_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ygOO8uMxGrIAX8oiJPA&_nc_ht=scontent.fktm19-1.fna&oh=00_AfC0FZGlcn4phrEJoTHoMOofiQU_69ZmdkLqqtloMnbqYA&oe=63EA56F0"
              alt="Image"
              width={"80%"}
              height={500}
            />
          </Box>
          <PaperOfTheHomepage />
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid>
            <Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  component={"img"}
                  image="https://m.media-amazon.com/images/M/MV5BMjI1YTZiYWMtZThjYi00Y2MxLWE4ZDAtZTg5YzFjZTU5ZTk3XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
                  title="Marco Reus"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    Marco Reus
                  </Typography>
                  <Typography>
                    Marco Reus (German pronunciation: [ˈmaʁkoː ˈʁɔʏs]; born 31
                    May 1989) is a German professional footballer who plays as
                    an attacking midfielder or forward. He captains Bundesliga
                    club Borussia Dortmund and plays for the Germany national
                    team. Reus spent his youth career at Borussia Dortmund,
                    prior to leaving for Rot Weiss Ahlen.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}
