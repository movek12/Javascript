import { Button, Card, CardActions, CardContent, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Pagination1() {
    const [posts,setPosts]=useState([]);
    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data, 'datas from Api')
            setPosts(data);
        })
    }
    useEffect(() => {
        getPosts();
    },[]);
  return (
    <div>
        {posts?.map((post)=>{
            return(
                <Grid display={'flex'} key={post.id} spacing={2}>
                    <Card>
                        <CardContent>
                            <Typography key={post.title}>
                                Title: {post.title}
                            </Typography>
                            <Typography key={post.body}>
                            {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Share</Button>
                            <Button>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })}
        <Pagination count={10}></Pagination>
    </div>
  )
}

export default Pagination1