import React from "react";
import RenderList from "./RenderList";
export const Users = () => {
  const Users1 = [
    { id: 1, nameOFTheUser: "Felix", isAuthorised: true },
    { id: 2, nameOFTheUser: "Freud", isAuthorised: false },
    { id: 3, nameOFTheUser: "Fridrich", isAuthorised: true },
  ];
  return (
    <>
      {Users1.map((aUser) => {
        return( 
        <RenderList
          userName={aUser.nameOFTheUser}
          key={aUser.id}
          authority={aUser.isAuthorised}
        />
        );
      })}
    </>
  );
};
export default Users;
