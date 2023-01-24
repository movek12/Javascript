import { CssBaseline } from "@mui/material";
import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
function MuiAssignment() {
  return (
    <>
      <CssBaseline />
      {/* Header imported */}
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default MuiAssignment;
