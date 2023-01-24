import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

function UserClone() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const getUsers = () => {
    axios
      // .get("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users")
      .then(({ data }) => {
        setUsers(data);
        console.log(data, "data form the API");
      });
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <>
      <main>
        <Button variant="contained" onClick={()=>{
          navigate('/CreateUser')
        }}>Create User</Button>
        <Box>
          <TableContainer component={Paper} justifyContent='center' align='center'>
            <Table sx={{ maxWidth: 700 }} area-label="simple table">
              <TableHead sx={{bgcolor: 'whitesmoke'}}>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Firstname</TableCell>
                  <TableCell>Lastname</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row, index) => {
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component={"th"} scope="row">
                      {index}
                    </TableCell>
                    <TableCell component={"th"}>{row.firstname}</TableCell>
                    <TableCell component={"th"}>{row.lastname}</TableCell>
                    <TableCell component={'th'}>
                      <Grid container>
                        <Grid item>
                          <Button variant="contained" size="small">
                            <EditIcon/>
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" size="small">
                            <DeleteIcon/>
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>;
                })
                };
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </main>
    </>
  );
}

export default UserClone;
