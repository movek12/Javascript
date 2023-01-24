import React from 'react'

function Extra() {
  return (
    <div>
        <Grid>
          <Card>
            <CardMedia
              sx={{ height: 250 }}
              component={"img"}
              image="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/269020619_3742152516010910_1872938354759804852_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VdRYO9NfL60AX-wLHj8&_nc_ht=scontent.fktm19-1.fna&oh=00_AfBAgd_v23KnW8yj9kX2Yh0iYLJOrOB4SOLfr0v1v8D4ew&oe=63C66554"
              title="Sujal Malla"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4">
                Sujal Codi Malla
              </Typography>
              <Typography>
                Sujal Malla is a codi, who wants to wed a German.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Share</Button>
              <Button>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 250 }}
              component={"img"}
              image="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/184547948_999489040795291_1596670270693532515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OMqAwVQ4qoAAX_fiW-T&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfB0d49QuKYyVTyiGjsliXRcSPK48YU9_MfavIIyIwtYYA&oe=63E6D9F7"
              title="Biswodeep Dahal"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Bishodeep Dahal
              </Typography>
              <Typography>Bishodeep Dahal is a computer engineer.</Typography>
            </CardContent>
            <CardActions>
              <Button>Share</Button>
              <Button>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={3}>
          Home
        </Grid>
        <Grid item xs={3}>
          About
        </Grid>
        <Grid item xs={3}>
          LogIn
        </Grid>
        <Grid item xs={3}>
          Contact Us
        </Grid>
        <Grid item xs={3}>
          Contact Us
        </Grid>
        <Grid item xs={3}>
          Contact Us
        </Grid>
        <Grid item xs={3}>
          Contact Us
        </Grid>
        <Grid item xs={3}>
          Contact Us
        </Grid>
      </Grid>
    </div>
  )
}

export default Extra