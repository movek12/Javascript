import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comments1 from "./Comments1";

const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

const dataFetchReducer = (issues, action) => {
  switch (action.type) {
    case "Fetch":
      return { ...issues, isFetching: true };
    case "Fetching_Done":
      return { ...issues, isFetching: false, data: action.fetchedData };
    case "Fetching_error":
      return {};
    default:
      return issues;
  }
};

function Comment() {
  const [issues, dispatch] = useReducer(dataFetchReducer, initialState);
  const [comments, setComments] = useState([]);
  let { number } = useParams();
  useEffect(() => {
    let didCancel = false;
    dispatch({ type: "Fetch" });
    axios
      .get(`https://api.github.com/repos/facebook/react/issues/${number}`)
      .then((response) => {
        console.log(response, "response");
        if (!didCancel) {
          dispatch({ type: "Fetching_Done", fetchedData: [response.data] });
        }
      })
      .catch((error) => {
        if (!didCancel) {
          dispatch({ type: "Fetching_Error", fetchedData: error });
        }
      });
    return () => {
      didCancel = true;
    };
  }, [number]);
  //   const postComments = async () => {
  //     axios
  //       .post(
  //         `https://api.github.com/repos/facebook/react/issues/${number}`)
  //       .then((response) => {
  //         console.log(response, "response from the posting");
  //       });
  //   };

  const getComments = () => {
    axios
      .get(
        `https://api.github.com/repos/facebook/react/issues/${number}/comments`
      )
      .then((data) => {
        console.log(data, "response for the API");
        setComments(data);
      });
  };
  useEffect(() => {
    getComments();
  }, [number]);
  const handleSubmit = () => {};
  return (
    <>
      {issues.data.map((issue) => {
        return (
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item sx={{ mt: 5 }}>
              <Typography variant="h4">{`${issue.title}#${issue.number}`}</Typography>
              {
                (issue.state = "open" ? (
                  <Box display={"flex"} sx={{ mt: 2 }}>
                    <Box
                      display={"flex"}
                      sx={{
                        bgcolor: "green",
                        borderRadius: 8,
                        width: 80,
                        height: 25,
                      }}
                    >
                      <AdjustIcon />
                      <Typography>Open</Typography>
                    </Box>
                    <Typography ml={1}>
                      {" "}
                      {`${issue.user.login} opened this issue...`}
                    </Typography>
                  </Box>
                ) : (
                  <Box display={"flex"} sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        bgcolor: "green",
                        borderRadius: 8,
                        width: 80,
                        height: 25,
                      }}
                    >
                      <CheckCircleIcon />
                      <Typography>Closed</Typography>
                    </Box>

                    <Typography>
                      {" "}
                      {`${issue.user.login} opened this issue...`}
                    </Typography>
                  </Box>
                ))
              }
            </Grid>
            <Grid
              sx={{
                width: 1400,
                mt: 4,
              }}
            >
              <Grid item>
                <Box sx={{ mt: 2 }} display={"flex"}>
                  <IconButton
                    sx={{ alignItems: "center", height: 50, width: 55 }}
                  >
                    <Avatar src={`${issue.user.avatar_url}`}></Avatar>
                  </IconButton>
                  <Grid
                    container
                    component={Paper}
                    sx={{
                      "&.MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 5,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        bgcolor: "black",
                        height: 50,
                        width: 1400,
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{ mt: 2, color: "white" }}
                      >{`${issue.user.login} commented .... days ago`}</Typography>
                    </Grid>
                    <Grid item bgcolor={"whitesmoke"}>
                      <Typography mt={2}>{`${issue.body}`}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            {comments.data.map((comment) => {
              return (
                <Box display={"flex"}>
                  <IconButton>
                    <Avatar src={`${comment.user.avatar_url}`} />
                  </IconButton>
                  <Grid sx={{ width: 1000 }}>
                    <Grid
                      item
                      sx={{
                        bgcolor: "green",
                        height: 60,
                        mt: 4,
                        color: "white",
                        textAlign: "left",
                      }}
                    >
                      <Typography>{`${comment.user.login} commented ......ago`}</Typography>
                    </Grid>
                    <Grid item component={Paper} sx={{ bgcolor: "whitesmoke" }}>
                      <Typography>{`${comment.body}`}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}

            {/* the new CommentField */}
            <Grid
              sx={{
                width: 1400,
                mt: 4,
              }}
            >
              <Box sx={{ mt: 2 }} display={"flex"}>
                <IconButton
                  sx={{ alignItems: "center", height: 50, width: 55 }}
                >
                  <Avatar />
                </IconButton>
                <Box component={Paper}>
                  <Grid
                    container
                    sx={{ height: 250, width: 1400, bgcolor: "whitesmoke" }}
                  >
                    <Grid
                      item
                      sx={{ height: 60, bgcolor: "green", width: 1400 }}
                    ></Grid>
                    <Grid item>
                      <TextField
                        onChange={(e) => setComments(e.target.value)}
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Leave your comment here"
                        sx={{ width: 1000 }}
                      ></TextField>
                      <Button
                        variant="outlined"
                        sx={{
                          height: 60,
                          width: 70,
                          bgcolor: "black",
                          color: "white",
                        }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            {/* <Comments1 number={issue.number}/> */}
          </Grid>
        );
      })}
    </>
  );
}

export default Comment;
