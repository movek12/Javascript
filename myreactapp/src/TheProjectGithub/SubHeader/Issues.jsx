import { ModeStandby } from "@mui/icons-material";
import {
  Button,
  Chip,
  Grid,
  Pagination,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import "./Issues.css";
import SupportIcon from "@mui/icons-material/Support";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useNavigate } from "react-router-dom";

const initialissues = {
  data: [],
  isLoading: false,
  error: null,
};
function dataFetchReducer(issues, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...issues, isloading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...issues, isLoading: false, data: action.payload };
    default:
      return issues;
  }
}
function Issues() {
  const [issues, dispatch] = useReducer(dataFetchReducer, initialissues);
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    let didCancel = false;
    dispatch({ type: "FETCH_DATA" });
    axios
      .get("https://api.github.com/repos/facebook/react/issues")
      .then((response) => {
        if (!didCancel) {
          dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
        }
      })
      .catch((error) => {
        if (!didCancel) {
          dispatch({ type: "FETCH_DATA_ERROR", payload: error });
        }
      });
    return () => {
      didCancel = true;
    };
  }, []);
  return (
    <>
      <Box>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            sx={{ bgcolor: "whitesmoke", width: 1200, height: 140, mt: 4 }}
          >
            <Box mt={2.5}>
              <SupportIcon />
              <Typography variant="h6" mr={1}>
                Want to contribute to facebook/react?
              </Typography>
              <Typography>
                If you have a bug or an idea, read the contributing guidelines
                before opening an issue.
              </Typography>
              <Typography>
                If you're ready to tackle some open issues, we've collected some
                good first issues for you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            component={Paper}
            sx={{ bgcolor: "green", width: 1200, height: 80 }}
            mt={2}
          >
            <Toolbar>
              <TextField
                label="Search all Issues"
                size="small"
                sx={{ mt: 2, color: "white" }}
              ></TextField>
              <Box sx={{ ml: "auto" }}>
                <Button
                  variant="flat"
                  size="large"
                  sx={{
                    mr: "auto",
                    mt: 2,
                    ml: 2,
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  Labels
                </Button>
                <Button
                  variant="flat"
                  size="large"
                  sx={{
                    mr: "auto",
                    mt: 2,
                    ml: 2,
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  Milestones
                </Button>
                <Button
                  variant="flat"
                  size="large"
                  sx={{
                    mr: "auto",
                    mt: 2,
                    ml: 2,
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  New Issue
                </Button>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }} mt={2}>
          <Grid item component={Paper} sx={{ width: 1200, bgcolor: "#acf9f9" }}>
            <Toolbar component={Paper} sx={{ bgcolor: "whitesmoke" }}>
              <Typography>
                <ModeStandby />
                {`${issues.data.length} Open`}
              </Typography>
              <Box ml={"auto"}>
                <Button>a</Button>
                <Button>a</Button>
                <Button>a</Button>
                <Button>a</Button>
                <Button>a</Button>
              </Box>
            </Toolbar>
            <Paper elevation={2}>
              {issues.error && <div>Error: {issues.error.message}</div>}
              {issues.data.length > 0 &&
                issues.data
                  .slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage)
                  .map((data, index) => {
                    console.log(data, "data");
                    return (
                      <Toolbar
                        key={index}
                        sx={{ height: 30, bgcolor: "#acf9f9" }}
                        component={Paper}
                      >
                        <Button
                          variant="text"
                          sx={{
                            textTransform: "none",
                            color: "black",
                            width: "100%",
                            height: "100%",
                          }}
                          onClick={()=>navigate(`/Issues/${data.number}`)}
                        >
                          <ModeStandby />
                          <Typography
                            mr={"auto"}
                            ml={1}
                            sx={{ alignText: "left" }}
                          >
                            {" "}
                            {data.title}
                          </Typography>

                          {data.labels.map((label,index)=>{
                            return (
                            <Chip
                            key={index}
                            sx={{ bgcolor: `#${label.color}`}}
                            label={
                              label.name
                            }
                            />)
                          })}
                        </Button>
                      </Toolbar>
                    );
                  })}
            </Paper>
          </Grid>
          <Typography mt={4}>
            <TipsAndUpdatesIcon sx={{ mr: 1 }} />
            Pro Tip! Find all open issues with in progress development work with
            linked:pr.
          </Typography>
        </Grid>
      </Box>
      <Grid container sx={{ justifyContent: "center", mt: 4 }}>
        <Grid item>
          <Pagination
            count={Math.ceil(issues.data.length / rowsPerPage)}
            onChange={(e,newPage) => setPage(newPage)}
          ></Pagination>
        </Grid>
      </Grid>
    </>
  );
}

export default Issues;
