import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Comments1(number) {
    console.log(number,"number")
    const [comments,setComments] = useState([]);
    const getComments = () => {
        axios.get(`https://api.github.com/repos/facebook/react/issues/${number}/comments`)
        .then((data)=>{
            console.log(data,"response for the API")
            setComments(data);
        })
    }
    useEffect(()=>{
        getComments();
    },[number])
}

export default Comments1