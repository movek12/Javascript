import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectHeader from "./Header/ProjectHeader";
import HomePage from "./HomePage/HomePage";
import Code from "./SubHeader/Code";
import Comment from "./SubHeader/Comment";
import Issues from "./SubHeader/Issues";

function ProjectRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/Issues" element={<Issues />} />
        <Route path="/Issues/:number" element={<Comment/>} />
      </Routes>
    </>
  );
}

export default ProjectRoutes;
