import React, { useState } from "react";
import { Button, Grid, TextField, Box, FormControl, Paper, Typography } from "@mui/material";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const  CreateUser = ({ editData: { edit, values }, editData}) => {
  console.log(edit,'edit')
  console.log(editData,'editData')
  // const { firstname:firstNameValue, lastname:lastNameValue} = values;
  const [firstname, setFirstName] = useState(edit ? values?.firstname : '');
  const [lastname, setLastName] = useState(edit ? values?.lastname :'');
  const navigate = useNavigate();

  const handleFirstName = ({ target: { value } }) => {
    setFirstName(value);
  };

  const handleLastName = ({ target: { value } }) => {
    setLastName(value);
  };
  
  const postData = async () => {
    await axios.post
    ('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users',
    {firstname,
    lastname,
  })
  .then(()=>{
    navigate("/Users");
  })
  }
  const handleSubmit =() =>{
    postData();
    edit? 
    updateData()
    :postData();
  };

  const updateData =()=>{
    axios .put
    (`https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users${values?.id}`,
    {
      firstname,
      lastname,
  })
  .then(()=>{
    navigate('/Users')
  })
};
  return (
    <>
      <form>
        <Header />
        <Grid justifyContent={"center"} sx={{ mr: "auto" }}>
          <FormControl>
            <Paper 
            elevation={3}
            sx={{ height:400 , width: 700,bgcolor:"whitesmoke" }}>
              <Typography variant="h4" sx={{mt:6}}>Enter here </Typography>
            <Box sx={{ mt: 8}}>
              <Grid item container justifyContent={"center"}>
                <TextField
                  label={"First Name"}
                  onChange={handleFirstName}
                  variant="filled"
                  sx={{ mr:3 }}
                ></TextField>
                <TextField
                  label={"Last Name"}
                  // value={}
                  onChange={handleLastName}
                  variant="filled"
                  sx={{ mr:3 }}
                ></TextField>
                <Button 
                variant="contained"
                sx={{ bgcolor:'black'}} 
                onClick={handleSubmit}
                >
                  {edit? 'Update' :'Add' }</Button>
              </Grid>
            </Box>
            </Paper>
          </FormControl>
        </Grid>
      </form>
    </>
  );
}

export default CreateUser;
