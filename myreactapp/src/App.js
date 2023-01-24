import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./NewMui/Layout";
import PrivateRoutes from "./NewMui/PrivateRoutes";
import HomePage from "./NewApp/Homepage";
import NewLayout from "./NewApp/NewLayout";
import NewTable from "./NewMui/NewTable";
import ProjectHeader from "./TheProjectGithub/Header/ProjectHeader";
import ProjectSubHeader from "./TheProjectGithub/SubHeader/ProjectSubHeader";
import ProjectRoutes from "./TheProjectGithub/ProjectRoutes";
import ProjectLayout from "./TheProjectGithub/ProjectLayout";
import ProjectHomePage from "./TheProjectGithub/ProjectHome/ProjectHomePage";
import ProjectFooter from "./TheProjectGithub/ProjectFooter.jsx/ProjectFooter";
import NewFooter from "./NewApp/NewFooter";
import Comment from "./TheProjectGithub/SubHeader/Comment";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        {/* <NewLayout>
          <HomePage/>
        </NewLayout> */}
      {/* <Layout>
          <PrivateRoutes/>
        </Layout>
      </BrowserRouter> */}
      {/* <NewTable/> */}
       <BrowserRouter>
        <ProjectLayout>
          <ProjectRoutes/>
        </ProjectLayout>
      </BrowserRouter>
      {/* <Comment state = {issues}/> */}
    </div>
  );
}

export default App;
