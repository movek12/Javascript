import { TextareaAutosize } from '@mui/material'
import React from 'react'

function CommentField() {
  return (
    <div>
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
                    <Avatar/>
                  </IconButton>
                  <Grid container component={Paper}>
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
                      ></Typography>
                    </Grid>
                    <Grid bgcolor={"whitesmoke"}>
                      <TextareaAutosize mt={2}>ajdlkfjald</TextAre>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
    </div>
  )
}

export default CommentField