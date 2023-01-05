import React from "react";

const RenderList = ({ userName, authority }) => {
  console.log(userName, "UserName");
  return (
    <>
      <ul>
        
          <li>{userName} is authorised</li>
      </ul>
    </>
  );
};

export default RenderList;
