import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import NewAppUsingMUI from "./NewAppUsingMUI";
import UsersMui from "./UsersMui";
import CreateUser from "./CreateUser";
import ContactUs from "./ContactUs";
import UserClone from "./UserClone";

function PrivateRoutes() {
  const [editData, setEditData] = useState({
    edit: false,
    values: {
      firstname: "",
      lastname: "",
    },
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<NewAppUsingMUI />} />
        <Route path="/Home" element={<NewAppUsingMUI />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/UserClone" element={<UserClone setEditData={setEditData} />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="CreateUser"
          element={<CreateUser editData={editData} />}
        />
      </Routes>
    </>
  );
}

export default PrivateRoutes;
