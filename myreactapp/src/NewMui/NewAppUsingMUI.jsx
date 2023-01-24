import React, { useState, useEffect } from "react";
import Header from "./Header";

import {  Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";

function NewAppUsingMUI() {
  const [posts,setPosts] = useState([]);
  const [rowsPerPage,setRowsPerPage] = useState(4);
  const getPostsData = () => {
    fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts")
    .then((response) => response.json())
      .then((data) => {
        console.log(data,"Dtat in API")
        setPosts(data);
      });
  };

  useEffect(()=>{
    getPostsData();
  },[])

  return (
    <>
    <Header/>
     <main>
      <Box>
      <Grid>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jixBG3k9jHMZDHF0vUjkw4ISVUh5CzXMaKrR55tT4TqfhHed1FkeRDP0ZfOui3142dg&usqp=CAU"
          style={{width:'100%', height:'5%'}}
          />
          </Grid>
      </Box>
     </main>
     {posts?.map((post)=>{
  return (
    <Box display={'flex'}>
<Grid item key={post.id} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post?.post_image}
        title="green iguana"
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
   </Box>
  );
})}
      <Pagination count={Math.ceil(posts?.length/rowsPerPage)}></Pagination>
    </>
  );
}

export default NewAppUsingMUI;

