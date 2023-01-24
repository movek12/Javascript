import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import { Button, Grid, Pagination } from "@mui/material";
import axios from "axios";
import CreateUser from "./CreateUser";
import { useNavigate } from "react-router-dom";

export default function Users({ setEditData }) {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const getUsers = () => {
    //using fetch
    //     fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users")
    //     .then ((response)=>response.json())
    //     .then ((data)=>{
    //         console.log(data,"data from the API");
    //         setUsers(data);
    // })
    //using Axios
    axios.get("").then(({ data }) => {
      setUsers(data);
      console.log(data, "data");
    });
  };
  const handleChangeOfPage = (event, newPage) => {
    console.log(newPage, "newPage");
    setPage(newPage);
  };

  React.useEffect(() => {
    getUsers();
  });

  const handleClick = () => {
    navigate("create-user");
  };

  const handleEdit = (row) => {
    console.log(row, "row");
    setEditData({ edit: true, values: row });
    navigate("/Users/create-user");
  };
  const handleDelete = async (id) => {
    try {
      await axios
        .delete
        //literal templete is used to pass here javascript expressions
        // `https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users${id})`
        ();
      getUsers();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Header /> <br />
      <br />
      <br />
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">S.NO</TableCell>
              <TableCell align="right">First Name </TableCell>
              <TableCell align="right">Last Name </TableCell>
              <TableCell align="right"> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              //1 * 10 -
              .slice(page * rowsPerPage - rowsPerPage, rowsPerPage * page)
              .map((row, index) => {
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="right">
                    {rowsPerPage * (page - 1) + 1 + index}
                  </TableCell>
                  <TableCell align="right">{row.firstname}</TableCell>
                  <TableCell align="right">{row.lastname}</TableCell>
                  <TableCell>
                    <Grid>
                      <Grid item>
                        <Button
                          type="button"
                          variant="contained"
                          onClick={() => {
                            handleEdit(row);
                          }}
                        >
                          {" "}
                          Edit{" "}
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          type="button"
                          variant="contained"
                          onClick={handleDelete(row?.id)}
                        >
                          {" "}
                          Del{" "}
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(users?.length / rowsPerPage)}
        onChange={handleChangeOfPage}
      ></Pagination>
      {/* <Link to="create-user"> */}
      <Button variant="contained" onClick={handleClick}>
        Create User
      </Button>
      {/* </Link> */}
      <CreateUser />
    </>
  );
}
