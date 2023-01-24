import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import NewHeader1 from "./NewHeader1";

function ContactUs() {
  return (
    <div>
      <NewHeader1/>
      <main>
        <Box>
          <Typography variant="h4">How can you reach us?</Typography>
          <Typography>
            At Begel Networks, we are always here to help you with your
            technology needs. Our team is dedicated to providing exceptional
            customer service, and we are always available to answer your
            questions and provide support. If you have any questions or
            concerns, please don't hesitate to contact us. You can reach us by
            phone at 555-555-5555, Monday through Friday from 9:00 am to 5:00
            pm. You can also send an email to info@begelnetworks.com, and one of
            our team members will get back to you as soon as possible. You can
            also connect with us via social media platforms like Facebook,
            LinkedIn, Twitter, etc. where you can stay up-to-date on the latest
            industry news, and connect with our team. If you would like to
            schedule a consultation or request more information about our
            services, you can use the form on our website and we will get back
            to you promptly. We value our relationship with our clients, and we
            are committed to providing the best customer experience possible. We
            look forward to hearing from you soon.
          </Typography>
        </Box>
      </main>
    </div>
  );
}

export default ContactUs;
