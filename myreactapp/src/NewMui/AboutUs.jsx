import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";

function AboutUs() {
  return (
    <>
    <Header/>
      <main>
        <Box>
          <Grid>
            <Typography variant="h4">What is Begel Networks?</Typography>
          </Grid>
          <Grid>
            <Typography>
              Welcome to Begel Networks! At Begel Networks, we are passionate
              about providing our clients with the highest quality technology
              solutions. We are a team of experienced professionals who are
              dedicated to helping businesses thrive in the ever-changing
              landscape of technology. We understand that every business has
              unique technology needs, and we work closely with our clients to
              create customized solutions that meet their specific requirements.
              Our services include network design and implementation,
              cybersecurity, cloud computing, and managed IT services. Our team
              is made up of certified experts who have extensive experience in
              the industry. We stay up-to-date with the latest technologies and
              trends to ensure that our clients are always ahead of the curve.
              We take pride in our commitment to excellence and strive to
              provide our clients with exceptional customer service. Our goal is
              to help businesses succeed by taking care of their technology
              needs, so they can focus on what they do best. We're excited to
              work with you and help your business reach its full potential
              through the power of technology. Contact us today to learn more
              about how we can help your business thrive.
            </Typography>
          </Grid>
        </Box>
      </main>
    </>
  );
}

export default AboutUs;
