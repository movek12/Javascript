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
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function NewTable() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: "whitesmoke" }}>
              <TableRow>
                <TableCell>S.NO</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>E-mail Address</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component={"th"} scope={"row"}>
                      {index + 1}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <Grid container>
                        <Grid item>
                          <Button variant="contained" sx={{ bgcolor:'black',size:'small' }}>
                            <EditIcon />
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" sx={{ bgcolor:'black',size:'small' }}>
                            <DeleteIcon />
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default NewTable;
