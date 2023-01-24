import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";

function About() {
  return (
    <>
      <main>
        <Box
          sx={{
            backgroundImage:
              'url("https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/299873851_771703243880383_4902937050451912159_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Bqb7eAHl30AX-dO6kS&tn=jCTdmKKMEpncShI2&_nc_ht=scontent.fktm19-1.fna&oh=00_AfAsFHz1dZP_vlNH3xx2tZCBmtVMgHbksWmVGeUTtlWp1Q&oe=63C244DF")',
            height: "100vh",
            backgroundSize: "100%",
          }}
        >
          <Grid
            py={5}
            container
            justifyContent="center"
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">About Us</Typography>
            </Grid>
          </Grid>
          <Container>
            <Grid container>
              <Grid item>
                <Typography variant="h4">About us</Typography>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Typography color="textSecondary" align="left" py={2}>
              Vrit Jobs is a one of the leading portals for finding employment
              in the finance and IT industries. It also serves as a one-stop
              solution for software and consulting services in human resources.
              Vrit Jobs provides numerous HR function-related solutions,
              including staffing, training, permanent and temporary recruitment
              services, and job portals, to various companies from a wide range
              of industries, including corporate houses, trading houses, and
              financial institutions. In order to provide customers with the
              best services, Vrit Jobs operates morally by adhering to the tenet
              that clients are highly valued. Vrit Job is renowned for providing
              expert training services to assemble qualified and skilled labor
              in a variety of fields.
            </Typography>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default About;
